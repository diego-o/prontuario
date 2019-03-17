import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalAtendimentoPage } from './modal-atendimento.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAtendimentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalAtendimentoPage]
})
export class ModalAtendimentoPageModule {}
