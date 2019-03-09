import { ModalController } from '@ionic/angular';
import { Paciente } from './../../models/paciente-model';
import { Component } from '@angular/core';
import { PacienteService } from 'src/services/service-paciente/paciente.service';
import { ModalPacientePage } from '../modal-paciente/modal-paciente.page';

@Component({
  selector: 'app-tab-prontuario',
  templateUrl: 'tab-prontuario.page.html',
  styleUrls: ['tab-prontuario.page.scss']
})

export class TabProntuarioPage {
  paciente: Paciente;

  constructor(
    private PacienteService: PacienteService,
    private ModalController: ModalController
  ) {
    this.paciente = new Paciente();
  }

  ngOnInit(): void {
    this.loadPaciente();
  }

  loadPaciente() {
    this.PacienteService.getPaciente("42721722808").subscribe(
      sucess => {
        this.paciente = sucess;
      },
      error => {
        console.log(error);
      }
    );
  }

  async detalhesPaciente() {
    let modal = await this.ModalController.create({
      component: ModalPacientePage,
      componentProps: {
        paciente: this.paciente
      }
    });

    return await modal.present();
  }
}
