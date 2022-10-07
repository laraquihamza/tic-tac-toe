import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  crossPath= '/images/cross.svg';
  circlePath= '/images/circle.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
