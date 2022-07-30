import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(private httpClient: HttpClient) {  }

  getRates(): Observable<ExchangeRatesResponse> {
    return this.httpClient.get<ExchangeRatesResponse>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  }
}
