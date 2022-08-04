import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  items = Array(40);

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() { }

  onClick(valor: number){
    this.popoverCtrl.dismiss({
      item: valor
    });
  }

}
