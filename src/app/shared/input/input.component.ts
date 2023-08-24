import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  inputControl:FormControl = new FormControl(null);

  outAmount:number = 0;
  constructor() { 
    // console.log(this.inputControl.value)
    this.inputControl.valueChanges.subscribe(()=>{
      console.log(this.inputControl.value);
      // this.outAmount = this.inputControl.value *2;
    })
  
  }
}
