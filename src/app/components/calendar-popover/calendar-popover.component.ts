import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-calendar-popover',
  templateUrl: './calendar-popover.component.html',
  styleUrls: ['./calendar-popover.component.scss'],
})
export class CalendarPopoverComponent implements OnInit {

  @Input() date: string;

  constructor(private popoverController: PopoverController) {
  }

  ngOnInit() { }

  async dismissWithData(event: any) {
    const element = await this.popoverController.getTop();

    if (element !== undefined) {
      await this.popoverController?.dismiss({
        date: event.detail.value.split('T')[0]
      });
    }
  }


}
