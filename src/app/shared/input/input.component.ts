import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Directive, HostListener } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  inputControl:FormControl = new FormControl(null);
  @Input() isdisable:boolean= false
  @Input() outAmount:number = 0;
  @Input() Result?:number;
  @Output() Amount: EventEmitter<number> = new EventEmitter<number>();
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value.replace(/[^0-9]/g, '');
    inputElement.value = newValue;
  }
  constructor() {
    this.inputControl.valueChanges.subscribe(()=>{
      this.Amount.emit(this.inputControl.value);


    })

  }
}
