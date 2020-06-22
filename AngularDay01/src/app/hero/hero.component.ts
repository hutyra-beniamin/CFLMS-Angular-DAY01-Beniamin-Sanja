import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
heroHeading: string;
heroText: string;
heroBtnText: string;
heroBtnUrl: string;
  constructor() {
    this.heroHeading = "We are your ultimate Winter experience Provider!";
    this.heroText = "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.";
    this.heroBtnText = "Learn More";
    this.heroBtnUrl = "http://www.gidf.de/"
   }

  ngOnInit(): void {
  }

}
