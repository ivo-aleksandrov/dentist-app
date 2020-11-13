import { Component, OnInit } from '@angular/core';

declare function navSlide(): any;

@Component({
  selector: 'app-logo-section',
  templateUrl: './logo-section.component.html',
  styleUrls: ['./logo-section.component.css']
})

export class LogoSectionComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    navSlide();
  }


}


