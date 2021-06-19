import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Malavikamohanan';
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  slides = [
    { img: "./assets/images/pattam.webp" },
    { img: "./assets/images/nir.webp" },
    { img: "./assets/images/naan11.webp" },
    { img: "./assets/images/great.webp" },
    { img: "./assets/images/beyond.webp" },
    { img: "./assets/images/petta.jpg" },
    { img: "./assets/images/master11.jpg" },
    { img: "./assets/images/yudra.jpg" },
    { img: "./assets/images/d43.jpg" },

  ];
  slideConfig = { "slidesToShow": 3, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 2000 };

  addSlide() {
    this.slides.push({ img: "./assets/images/pattam.webp" },
      { img: "./assets/images/nir.webp" },
      { img: "./assets/images/naan11.webp" },
      { img: "./assets/images/great.webp" },
      { img: "./assets/images/beyond.webp" },
      { img: "./assets/images/petta.jpg" },
      { img: "./assets/images/master11.jpg" },
      { img: "./assets/images/yudra.jpg" },
      { img: "./assets/images/d43.jpg" },

    )
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
