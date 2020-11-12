import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.scss']
})
export class CardAnimalComponent implements OnInit {

  constructor() { }

  count: number;

  ngOnInit(): void {
    this.count=0;
  }
  add() {
    this.count++;
  }
  sub() {
    this.count--;
  }

}
