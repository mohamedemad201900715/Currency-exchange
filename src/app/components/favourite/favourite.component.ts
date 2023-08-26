import { Component, Input } from '@angular/core';
import { conversionRates } from 'src/app/Interfaces/exchange-rate.interface';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {
  @Input() flagurl:string="";
  @Input() response?:conversionRates;
  checkedCurrencies: string[] = JSON.parse(localStorage.getItem('currencies') || '[]');
  checkedCurrenciesRates: number[] = JSON.parse(localStorage.getItem('currencies-rate') || '[]');
  handleCheckedCurrencies(currencies: string[]) {
    localStorage.setItem('currencies', JSON.stringify(currencies));
    this.checkedCurrencies = JSON.parse(localStorage.getItem('currencies') || '[]');

  }
  handleCurrenciesRateChange( currenciesRate:number[]){
    localStorage.setItem('currencies-rate', JSON.stringify(currenciesRate));
    this.checkedCurrenciesRates = JSON.parse(localStorage.getItem('currencies-rate') || '[]');


  }
}

