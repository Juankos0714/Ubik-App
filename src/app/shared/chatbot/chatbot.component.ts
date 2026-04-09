import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {

  private http = inject(HttpClient);
  private auth = inject(AuthService);

  isOpen = signal(false);
  message = signal('');
  messages = signal<{
    from: 'user' | 'bot',
    text: string,
    data?: any,
    intent?: string
  }[]>([]);
  loading = signal(false);

  role = computed(() => {
    if (this.auth.isAdmin()) return 'admin';
    if (this.auth.isOwner()) return 'owner';
    return 'user';
  });

  toggleChat() {
    const wasClosed = !this.isOpen();
    this.isOpen.update(v => !v);
    
    if (wasClosed && this.messages().length === 0) {
      this.sendMessage('mostrar opciones', true);
    }
  }

  sendMessage(customText?: string, isHidden: boolean = false) {
    const text = customText ?? this.message().trim();
    if (!text) return;

    if (!isHidden) {
      this.messages.update(m => [...m, { from: 'user', text }]);
      this.message.set('');
    }
    
    this.loading.set(true);

    const body = {
      role: this.role(),
      message: text
    };

    let headers = new HttpHeaders();
    if (this.auth.isLogged()) {
      headers = headers.set('Authorization', `Bearer ${this.auth.token()}`);
    }

    this.http.post<any>(`${environment.apiUrl}/ai`, body, { headers })
      .subscribe({
        next: (res) => {
          const reply = res?.message || 'Sin respuesta';

          // Detectar si es un mensaje de "calentamiento" de la IA
          const isWarmUp = reply.toLowerCase().includes('iniciando') || 
                           reply.toLowerCase().includes('motor') || 
                           reply.toLowerCase().includes('segundos');

          if (isHidden && isWarmUp) {
            // Si es un mensaje oculto y la IA se está iniciando, reintentamos en 7 segundos
            setTimeout(() => {
              this.sendMessage(text, true);
            }, 7000);
            return; // No mostramos el mensaje ni quitamos el loading
          }

          // Primero mostramos el mensaje con typing
          this.simulateTyping(reply);

          // Luego agregamos la data si existe
          if (res?.data) {
            this.messages.update(m => [
              ...m,
              {
                from: 'bot',
                text: '',
                data: res.data,
                intent: res.intent
              }
            ]);
          }
        },
        error: () => {
          if (isHidden) {
            // Si hubo error en el mensaje oculto, reintentamos después
            setTimeout(() => this.sendMessage(text, true), 10000);
          } else {
            this.simulateTyping('Error al procesar mensaje');
          }
        }
      });
  }

  simulateTyping(text: string) {
    let current = '';
    let index = 0;

    this.messages.update(m => [...m, { from: 'bot', text: '' }]);

    const interval = setInterval(() => {
      if (index < text.length) {
        current += text[index++];
        this.messages.update(m => {
          const copy = [...m];
          copy[copy.length - 1].text = current;
          return copy;
        });
      } else {
        clearInterval(interval);
        this.loading.set(false);
        this.scrollToBottom();
      }
    }, 20);
  }
  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  scrollToBottom() {
    setTimeout(() => {
      const container = document.querySelector('.chat-messages');
      container?.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }, 100);
  }

  isImageUrl(value: any): boolean {
    if (typeof value !== 'string') return false;
    const url = value.toLowerCase();
    return url.startsWith('http') && (
      url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || 
      url.endsWith('.webp') || url.endsWith('.gif') || url.includes('cloudinary.com')
    );
  }

  isImageArray(value: any): boolean {
    return Array.isArray(value) && value.length > 0 && (this.isImageUrl(value[0]) || this.isImageUrl(value[0]?.url));
  }

  extractImageUrl(item: any): string | null {
    if (typeof item === 'string') return item;
    return item?.url || item?.image_url || null;
  }
}
