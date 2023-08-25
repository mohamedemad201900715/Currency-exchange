import { Component, Input } from '@angular/core';
import { conversionRates } from 'src/app/Interfaces/exchange-rate.interface';
@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent {
btnName:string ="convert"
@Input() flagurl:string= "";
@Input() response?:conversionRates
counryselect(curr:string){
  console.log("my counry is " + curr)
}
}
