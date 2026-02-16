import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-filter-modal',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="p-4 text-white bg-[#1e2128] rounded">
			<h3 class="text-lg font-bold mb-2">Filtros</h3>
			<!-- Placeholder modal content -->
			<p class="text-sm text-gray-300">Opciones de filtrado (placeholder).</p>
		</div>
	`,
})
export class FilterModal {}
