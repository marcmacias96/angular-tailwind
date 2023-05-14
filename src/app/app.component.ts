import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Coin {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  api: string =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  coins: Coin[] = [];
  titles: string[] = ['#', 'Coin', 'Price', 'Price Change', '24H Volume'];
  searchText: string = '';
  filteredCoins: Coin[] = [];

  constructor(private http: HttpClient) { }

  searchCoins() {
    this.filteredCoins = this.coins.filter(
      (coin) => coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    )
  }

  ngOnInit(): void {
    this.http.get<Coin[]>(this.api).subscribe(
      {
        error: (v) => {
          // this.coins = v;
          // this.filteredCoins = v;
          this.coins = [
            {
              "id": "bitcoin",
              "symbol": "btc",
              "name": "Bitcoin",
              "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
              "current_price": 26850,
              "total_volume": 7071727108,
              "price_change_percentage_24h": 0.05705,
            },
            {
              "id": "bitcoin",
              "symbol": "btc",
              "name": "Bitcoin",
              "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
              "current_price": 26850,
              "total_volume": 7071727108,
              "price_change_percentage_24h": 0.05705,
            },

          ];
          this.filteredCoins = this.coins;
        }
      }

    );

  }

}
