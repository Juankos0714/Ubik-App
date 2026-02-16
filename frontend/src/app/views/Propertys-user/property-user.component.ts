import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyUserService } from '../../core/services/property-user.service';
import { PropertyUser } from '../../core/models/property-user.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './property-user.component.html',
})

export class PropertyUserComponent implements OnInit {
    properties: PropertyUser[] = [];
    loading = true;

    constructor(private propertyUserService: PropertyUserService) {}

    ngOnInit() {
        this.loadProperties();
    }

    loadProperties() {

        this.propertyUserService.getMyProperties().subscribe({
             next: (data) => {
                this.properties = data;
                this.loading = false;
            },
            error: () => {
                this.loading = false;
            }
        });
    }
    deleteProperty(id: number) {
    if (!confirm('¿Eliminar esta propiedad?')) return;

      this.propertyUserService.deleteProperty(id).subscribe(() => {
          this.properties = this.properties.filter(p => p.id !== id);
      });
    }
}    