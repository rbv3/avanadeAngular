import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'spa-expansion-info',
  templateUrl: './expansion-info.component.html',
  styleUrls: ['./expansion-info.component.scss']
})
export class ExpansionInfoComponent implements OnInit {
  
  @ViewChild('multiAccordion',{static:false}) accordion: MatAccordion;
  
  constructor() { }
  isOpen: boolean;
  ngOnInit(): void {
    this.isOpen = false;
  }
  openPanels() {
    console.log(this.accordion)
    this.accordion.openAll();
  }
  closePanels() {
    this.accordion.closeAll();
  }

}
