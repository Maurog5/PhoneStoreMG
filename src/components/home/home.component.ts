import { Component } from '@angular/core';
import { ICelular, listPhones } from 'src/app/models/phone.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  listPhones: ICelular[] = listPhones;

  carouselImages: string[] = [
    "../../assets/cel-banner.jpeg",
    "../../assets/cel-banner.jpeg",
    "../../assets/cel-banner.jpeg",
    "../../assets/cel-banner.jpeg",
    "../../assets/cel-banner.jpeg",
    "../../assets/cel-banner.jpeg"
  ];
  slickConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
  };
  
  

  constructor() {
  }
}
