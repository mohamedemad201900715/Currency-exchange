import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
import { ExchangeRateResponse, conversionValue } from '../Interfaces/exchange-rate.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http:HttpClient) { }

  public getProducts(){
  return this.http.get<ExchangeRateResponse>('https://currencyconversion-production-38ba.up.railway.app/currency/compare?base=USD');
}
getConvert(from: string, to: string, amount: number){
  return this.http.get<conversionValue>(`https://currencyconversion-production-38ba.up.railway.app/currency/convert?fromCurrency=${from}&toCurrency=${to}&amount=${amount}`);
}
}
