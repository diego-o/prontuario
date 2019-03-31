import { ModalAtendimentoPage } from './../modal-atendimento/modal-atendimento.page';
import { ModalController } from '@ionic/angular';
import { Paciente } from './../../models/paciente-model';
import { Component } from '@angular/core';
import { PacienteService } from 'src/services/service-paciente/paciente.service';
import { ModalPacientePage } from '../modal-paciente/modal-paciente.page';
import { Atendimento } from 'src/models/atendimento-model';
import { ProntuarioService } from 'src/services/service-prontuario/prontuario.service';

@Component({
  selector: 'app-tab-prontuario',
  templateUrl: 'tab-prontuario.page.html',
  styleUrls: ['tab-prontuario.page.scss']
})

export class TabProntuarioPage {
  paciente: Paciente;
  atendimentos: Atendimento[];

  constructor(
    private PacienteService: PacienteService,
    private ProntuarioServie: ProntuarioService,
    private ModalController: ModalController
  ) {
    this.paciente = new Paciente();
    this.atendimentos = new Array<Atendimento>();
    this.atendimentos.push(new Atendimento());
  }

  ngOnInit(): void {
    this.loadPaciente();
  }

  loadPaciente() {
    this.paciente = this.PacienteService.Paciente;
    this.listarAtendimentos();
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

  async detalhesAtendimento(atend: Atendimento) {
    let modal = await this.ModalController.create({
      component: ModalAtendimentoPage,
      componentProps: {
        atendimento: atend
      }
    });

    return await modal.present();
  }

  listarAtendimentos() {
    this.ProntuarioServie.atendimentos(this.paciente.cpf).subscribe(
      sucess => {
        this.atendimentos = sucess;
      },
      error => {
        console.log(error);
      }
    )
  }
}
