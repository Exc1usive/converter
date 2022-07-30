import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  amount = 1;
  amountFrom = 1;
  amountTo = 1;
  from = "AUD";
  to = "AUD";
  rateFrom = 1;
  rateTo = 1;
  arrayOfCurrency: any[] = [];
  
    getListOfCurrency() {
      this.service.getRates().subscribe((res: object | null) => {
        let obj = Object.create(res)
        obj.map((item: any) => this.arrayOfCurrency.push(item))
      })
    }

  convertFrom(): number {
    this.amountTo = this.amountFrom * this.rateFrom / this.rateTo;
    this.amountTo = +this.amountTo.toFixed(2);
    return this.amountTo;
  }

  convertTo(): number {
    this.amountFrom = this.amountTo / this.rateFrom * this.rateTo;
    this.amountFrom = +this.amountFrom.toFixed(2);
    return this.amountFrom;
  }

  changeHandlingFrom() {
    this.arrayOfCurrency.map((item: any) => {
      if (item.cc === this.from) {
        this.rateFrom = item.rate 
        console.log("from " + this.rateFrom);
      } 
      this.convertFrom();
    });
  }

  changeHandlingTo() {
    this.arrayOfCurrency.map((item: any) => {
      if (item.cc === this.to) {
        this.rateTo = item.rate
        console.log("to " + this.rateTo);
      }
      this.convertFrom();
    });
  }

  constructor(private service: ExchangeRatesService) {
    this.service.getRates().subscribe((res: object | null) => {
      let obj = Object.create(res)
      obj.map((item: any) => this.arrayOfCurrency.push(item))
      console.log(this.arrayOfCurrency);
    })
   }

  ngOnInit(): void {
  }

}
