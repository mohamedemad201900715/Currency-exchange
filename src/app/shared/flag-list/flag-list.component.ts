import { Component, Input } from '@angular/core';
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

  toggleList() {
    this.isListHidden = !this.isListHidden;
    this.isListOpen = true;
  }

  closeDropdown() {
    this.isListHidden = true;
    this.isListOpen = false;
  }
}
