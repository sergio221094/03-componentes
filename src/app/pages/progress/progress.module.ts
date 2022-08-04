import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressPageRoutingModule } from './progress-routing.module';

import { ProgressPage } from './progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProgressPage]
})
export class ProgressPageModule {}
