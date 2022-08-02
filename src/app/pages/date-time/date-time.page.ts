import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { CalendarPopoverComponent } from 'src/app/components/calendar-popover/calendar-popover.component';
@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  public validationsForm: FormGroup;

  constructor(
    private popoverController: PopoverController,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.validationsForm = this.fb.group({
      date: ['', Validators.required]
  });
  }

  async presentCalandarPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CalendarPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        date: this.validationsForm.value.date === '' ? this.getDateTime() : this.validationsForm.value.date
      },
    });
    popover.onDidDismiss().then((dataReturned: any) => {
      if(dataReturned?.data?.date !== undefined){
        this.validationsForm.patchValue({
          date: dataReturned?.data?.date
        });
      }
    });
    await popover.present();
  }

  getDateTime(){

  }


}
