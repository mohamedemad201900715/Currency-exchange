import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
import { ExchangeRateResponse } from '../Interfaces/exchange-rate.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http:HttpClient) { }

  public getProducts(){
  return this.http.get<ExchangeRateResponse>('https://v6.exchangerate-api.com/v6/ecf10bab01b34bf0de9636e1/latest/USD');
}
}
