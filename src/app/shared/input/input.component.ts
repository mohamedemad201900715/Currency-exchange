import { Component, Input } from '@angular/core';
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
  outAmount:number = 0;
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value.replace(/[^0-9]/g, '');
    inputElement.value = newValue;
  }
  constructor() {
    // console.log(this.inputControl.value)
    this.inputControl.valueChanges.subscribe(()=>{
      console.log(this.inputControl.value);
      // this.outAmount = this.inputControl.value *2;
    })

  }
}
