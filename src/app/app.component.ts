import { Component ,OnInit } from '@angular/core';
import { ApiDataService } from './Services/api-data.service';
import { ToggleStaticsData, ToggleStaticsData1 } from './static/data.static';
import { conversionRates } from './Interfaces/exchange-rate.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Currency-exchange';
  toggleData = ToggleStaticsData;
  toggleData1 = ToggleStaticsData1;
  activeTab = ToggleStaticsData[0].status;
  flagurl:string= "https://currencyfreaks.com/photos/flags/";
  response!: conversionRates;
  constructor(private service: ApiDataService){}
  ngOnInit():void{
    this.service.getProducts().subscribe((response) => {
      this.response = response.conversion_rates as conversionRates ;
      console.log(this.response);
    });
  }
}
