import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carousel-arrow-left',
  imports: [],
  templateUrl: './carousel-arrow-left.html',
})
export class CarouselArrowLeft {
  @Output() clickArrow = new EventEmitter<void>();

  onClick() {
    this.clickArrow.emit();
  }

}
