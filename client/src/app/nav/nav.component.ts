import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  barLeftX = 0;
  barWidth = 0;
  barSavedX = 0;
  barSavedWidth = 0;

  constructor(private elRef: ElementRef) {}

  private getPositionFormElement(el) {
    let xPos = 0;
    let yPos = 0;

    while (el) {
      xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
      yPos += el.offsetTop - el.scrollTop + el.clientTop;

      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos,
    };
  }

  onHover(element): void {
    this.barSavedX = this.barLeftX;
    this.barSavedWidth = this.barWidth;
    const el = element.srcElement;
    const x = this.getPositionFormElement(el).x;
    this.barLeftX = x;
    this.barWidth = el.offsetWidth + 0;
  }
  onHoverOut(): void {
    if (this.barSavedWidth && this.barSavedX) {
      this.barWidth = this.barSavedWidth;
      this.barLeftX = this.barSavedX;
    }
  }
  moveBarTo(element) {

    const el = element.srcElement;
    const x = this.getPositionFormElement(el).x;
    this.barLeftX = x;
    this.barWidth = el.offsetWidth + 0;
    this.barSavedWidth = 0;
    this.barSavedX = 0;
    console.dir(el);

  }

  ngOnInit(): void {
     setTimeout(() => {
       const btn = document.querySelector('app-nav a.active');
       if (btn) {
         btn.dispatchEvent(new Event('click'));
         (btn as any).click(); // idk why but  no click on element google plz fix
       }
     }, 1000);
  }
}
