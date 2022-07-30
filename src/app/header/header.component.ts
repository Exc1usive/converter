import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../services/exchange-rates.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currencyes: any[] = [];
  

  constructor(private service: ExchangeRatesService) {
    this.service.getRates().subscribe(res => {
      let obj = Object.create(res)
      obj.map((item: any) => {
        item.cc === "USD" ? this.currencyes.push(item) : 
        item.cc === "EUR" ? this.currencyes.push(item) : 
        item.cc === "RUB" ? this.currencyes.push(item) : 
        null
      })
    })
   }

  ngOnInit(): void {
  }

}
