import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slideIndex:number = 1;
  isAdmin = this.cookieService.get('isAdmin');

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }
  
  
  // Next/previous controls
  plusSlides(n:number): void{
    this.slideIndex+=n;
    this.showSlides(this.slideIndex);
  }
  
  // Thumbnail image controls
  currentSlide(n:number): void{
    this.slideIndex = n;
    this.showSlides(this.slideIndex);
  }
  
  showSlides(n:number): void{
    var i;
    var slides = document.getElementsByClassName("mySlides")as HTMLCollectionOf<HTMLElement>;
    var dots = document.getElementsByClassName("dot")as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
  }
}
