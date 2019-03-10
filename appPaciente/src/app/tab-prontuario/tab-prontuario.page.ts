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
    this.PacienteService.getPaciente("42721722808").subscribe(
      sucess => {
        this.paciente = sucess;
        this.listarAtendimentos();
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

  listarAtendimentos() {
    this.ProntuarioServie.atendimentos(this.paciente.cpf).subscribe(
      sucess => {
        this.atendimentos = sucess;
        console.log(this.atendimentos);
      },
      error => {
        console.log(error);
      }
    )
  }
}
