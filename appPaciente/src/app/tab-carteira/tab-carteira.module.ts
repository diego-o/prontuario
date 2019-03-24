import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabCarteiraPage } from './tab-carteira.page';
import { AcordionComponent } from '../acordion/acordion.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabCarteiraPage }])
  ],
  declarations: [
    TabCarteiraPage,
    AcordionComponent
  ],
  entryComponents: [
    AcordionComponent
  ]
})
export class TabCarteiraPageModule {}
