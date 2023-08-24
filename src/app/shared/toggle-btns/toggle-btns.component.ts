import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ToggleDataModel {
  title: string;
  status: string;
}

@Component({
  selector: 'toggle-btns',
  template: `
    <button
      class="toggle-btn"
      [ngClass]="{ 'toggle-btn_active': currentActiveBtn === item.status }"
      *ngFor="let item of toggleData"
      (click)="setActiveBtn(item.status)"
    >
      {{ item.title }}
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./toggle-btns.component.scss'],
})
export class ToggleBtnsComponent implements OnInit {
  @Input() toggleData: ToggleDataModel[] = [];
  @Input() currentActiveBtn?: string;

  @Output() setActive$ = new EventEmitter<string>();

  ngOnInit(): void {
    if (!this.currentActiveBtn && this.toggleData?.length)
      this.currentActiveBtn = this.toggleData[0].status;
  }

  setActiveBtn(status: string) {
    this.currentActiveBtn = status;
    this.setActive$.emit(status);
  }
}
