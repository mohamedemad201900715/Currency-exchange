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
}

