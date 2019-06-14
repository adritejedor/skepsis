import { Component, OnInit } from '@angular/core';
import { TattooService } from '../../services/tattoo-service';
import { TattooCard } from '../../models/tattoo-card-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardData: TattooCard[];

  constructor(
    private cardService: TattooService
  ) { }

  ngOnInit() {
    this.cardService.getTattooCardData().subscribe(
      (resp: TattooCard[]) => {
        this.cardData = resp;
        console.log(this.cardData);
      }, (err) => {
        console.error(err);
      }
    );
  }

}
