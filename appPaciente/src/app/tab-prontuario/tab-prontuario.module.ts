
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabProntuarioPage } from './tab-prontuario.page';
import { ModalPacientePage } from '../modal-paciente/modal-paciente.page';
import { ModalAtendimentoPage } from '../modal-atendimento/modal-atendimento.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabProntuarioPage }])
  ],
  declarations: [
    TabProntuarioPage, 
    ModalPacientePage,
    ModalAtendimentoPage
  ],
  entryComponents: [
    ModalPacientePage,
    ModalAtendimentoPage
  ]
})
export class TabProntuarioPageModule {}
