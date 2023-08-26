import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { ApiDataService } from '../../Services/api-data.service';
import { conversionRates } from 'src/app/Interfaces/exchange-rate.interface';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
 @Input() flagurl:string= "";
@Input() response?:conversionRates



  isDropdownOpen = false;
  @Output()selecteddCurrency = new EventEmitter
  selectedCurrency:string="";
toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}

selectCurrency(currency: string) {
  this.selectedCurrency = currency;
  console.log(this.selectedCurrency);
  this.toggleDropdown()
  this.selecteddCurrency.emit(currency);

}
}
