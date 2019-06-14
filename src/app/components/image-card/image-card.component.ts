import { Component, OnInit, Input } from '@angular/core';
import { TattooService } from '../../services/tattoo-service';
import { TattooCard } from '../../models/tattoo-card-model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  @Input() inputData: TattooCard;

  constructor(

  ) {

    console.log(this.inputData);
  }

  ngOnInit() {

  }

  // private dataParser(data: TattooCard) {
  //   this.data = {
  //     imageId: this.inputData.imageId,
  //     title: this.inputData.title,
  //     imageUrl: this.inputData.imageUrl,
  //     description: this.inputData.description,
  //     likes: this.inputData.likes,
  //     instaUrl: this.inputData.instaUrl,
  //     date: this.inputData.date
  //   };
  // }

  public goToInsta() {

  }

  public like(url: string) {

  }


}
