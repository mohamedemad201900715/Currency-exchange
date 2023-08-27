import { Component, Input } from '@angular/core';
import { conversionRates } from 'src/app/Interfaces/exchange-rate.interface';
import { ApiDataService } from '../../Services/api-data.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent {
  @Input() flagurl:string= "";
  @Input() response?:conversionRates;
  btnDisabled:boolean= true;
  Amount: number = 0;
  currancyNameFrom:string="";
  currancyNameTo:string="";
  btnName:string ="convert"
  Result?:number;
  loading:boolean= false;
constructor(private service: ApiDataService){}
updateButtonState() {
  this.btnDisabled = !this.currancyNameFrom || !this.currancyNameTo || this.Amount == 0;
  console.log(this.currancyNameFrom)

  console.log(this.currancyNameTo + "to")
  console.log(this.btnDisabled);
}
currencyFrom(currancy:string){
  this.currancyNameFrom =currancy;
  this.updateButtonState();
}
currencyTo(currancy:string){
  this.currancyNameTo = currancy;
  this.updateButtonState();

}

  amount(Amount: number): void {
    this.Amount = Amount;
    this.updateButtonState();
  }
convert(from:string , to:string ,amount:number){
  this.loading=true
  this.service.getConvert(from , to , amount).subscribe((response) => {
    this.Result = response["conversion_value"];
    console.log(this.Result)
    this.loading=false;
  });
}
}
