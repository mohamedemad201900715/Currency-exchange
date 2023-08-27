import { Component, EventEmitter, Input, Output } from '@angular/core';
import { conversionRates } from 'src/app/Interfaces/exchange-rate.interface';

@Component({
  selector: 'app-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.scss']
})
export class FlagListComponent {
  @Input() flagurl:string="";
  @Input() response?:conversionRates;
  isListHidden = true;
  isListOpen = false;
  @Output() checkedCurrenciesChange = new EventEmitter<string[]>();
  @Output() checkedCurrenciesChangeRate = new EventEmitter<number[]>();
 @Input() checkedCurrencies: string[] = [];
 @Input() checkedCurrenciesRate: number[] = [];

  toggleList() {
    this.isListHidden = !this.isListHidden;
    this.isListOpen = true;
  }

  closeDropdown() {
    this.isListHidden = true;
    this.isListOpen = false;
  }
  checkboxChanged(event: any, key: string, value: number) {
    if (event.target.checked) {
      this.checkedCurrencies.push(key);
      this.checkedCurrenciesRate.push(value);
    } else {
      const index = this.checkedCurrencies.indexOf(key);
      const index2 = this.checkedCurrenciesRate.indexOf(value);

      if (index !== -1 && index2 !== -1) {
        this.checkedCurrencies.splice(index, 1);
        this.checkedCurrenciesRate.splice(index2, 1);
      }
    }
    this.checkedCurrenciesChange.emit(this.checkedCurrencies);
    this.checkedCurrenciesChangeRate.emit(this.checkedCurrenciesRate);
  }


}
