import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carousel-arrow-right',
  imports: [],
  templateUrl: './carousel-arrow-right.html',
})
export class CarouselArrowRight {

  @Output() clickArrow = new EventEmitter<void>();

  onClick() {
    this.clickArrow.emit();
  }

}
