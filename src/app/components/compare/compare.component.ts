import { Component, Input } from '@angular/core';
import { conversionRates } from 'src/app/Interfaces/exchange-rate.interface';
import { ApiDataService } from '../../Services/api-data.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {
  btnName:string ="compare"
  @Input() flagurl:string= "";
@Input() response?:conversionRates
btnDisabled:boolean= true;
Amount: number = 0;
currancyNameFrom:string="";
currancyNameTo1:string="";
currancyNameTo2:string="";
Result1?:number;
Result2?:number;
loading:boolean= false;
constructor(private service: ApiDataService){}


updateButtonState() {
  this.btnDisabled = !this.currancyNameFrom || !this.currancyNameTo1 || !this.currancyNameTo2 || this.Amount == 0;
}
currencyFrom(currancy:string){
  this.currancyNameFrom =currancy;
  this.updateButtonState();
}
currencyTo1(currancy:string){
  this.currancyNameTo1 = currancy;
  this.updateButtonState();

}
currencyTo2(currancy:string){
  this.currancyNameTo2 = currancy;
  this.updateButtonState();

}
 amount(Amount: number): void {
    this.Amount = Amount;
    this.updateButtonState();
  }
convert(from:string , to1:string ,to2:string ,amount:number){
  this.loading=true
  const call_1 = this.service.getConvert(from, to1, amount);
const call_2 = this.service.getConvert(from, to2, amount);
  forkJoin([call_1, call_2]).subscribe(
    ([response1, response2]) => {
      this.Result1 =   response1["conversion_result"];
      this.Result2 = response2["conversion_result"];
      this.loading = false;
    },
    (error) => {
      console.error('An error occurred:', error);
      this.loading = false;
    });
}

}
