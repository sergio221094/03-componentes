import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje = 0.05;

  constructor() { }

  ngOnInit() {
  }

  changeRange(event){
    this.porcentaje = (event.detail.value)*0.01;

  }

}
