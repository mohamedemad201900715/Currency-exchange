import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {
  @Input() title:string = "";
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() isdisable:boolean = false;
}
