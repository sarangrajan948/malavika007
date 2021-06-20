import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HappyBirthdayComponent } from './happy-birthday/happy-birthday.component';

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

  portfolio = [
    { img:"./assets/images/malavika.jpeg"},
    { img:"./assets/images/malavika1.jpeg"},
    { img:"./assets/images/malavika3.jpeg"},
    { img:"./assets/images/malavika4.jpeg"},
    { img:"./assets/images/3.webp"},
    { img:"./assets/images/14.webp"},
    { img:"./assets/images/5.webp"},
    { img:"./assets/images/3.webp"},
    { img:"./assets/images/3.webp"},
    { img:"./assets/images/5.webp"},
    { img:"./assets/images/14.webp"},
    { img:"./assets/images/5.webp"},
  ]
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
  // Wishmaals() {
  //   const activeModal = this.modalService.open(HappyBirthdayComponent, {
  //     backdrop: "static",
  //     centered: true,
  //     windowClass: 'modal-info'
  //   });
    // activeModal.result.then(
    //   (data) => {
    //     this.getSubject(this.user.id);
    //   },
    //   (reason) => {}
    // );
  }
