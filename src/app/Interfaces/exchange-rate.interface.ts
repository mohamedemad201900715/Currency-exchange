
export interface ExchangeRateResponse {
  base_code: string;
  conversion_rates: conversionRates;
}
export interface conversionRates{
    [currencyCode: string]: number;
}
export interface conversionValue{
  [currencyCode: string]: number;
}
