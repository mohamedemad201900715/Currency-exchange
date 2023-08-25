import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
import { ExchangeRateResponse } from '../Interfaces/exchange-rate.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http:HttpClient) { }

  public getProducts(){
  return this.http.get<ExchangeRateResponse>('https://currencyexchange-wbtr.onrender.com/latest/USD');
}
}
