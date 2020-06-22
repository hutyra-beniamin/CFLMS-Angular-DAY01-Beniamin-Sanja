import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
 heroHeading: string;
 heroText: string;
 heroBtnText: string;
 heroBtnUrl: string;


  constructor() {
    this.heroHeading = "Benij Playground";
    this.heroText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim natus eligendi voluptatem ullam? Dicta unde beatae maiores, ipsa dolorem harum ratione, pariatur quaerat voluptas sit quasi. Voluptas, nemo porro.";
    this.heroBtnText = "Learn more";
    this.heroBtnUrl = "https://codefactory.wien";
   }

  ngOnInit(): void {
  }

}
