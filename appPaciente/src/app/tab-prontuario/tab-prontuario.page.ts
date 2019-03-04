import { Component } from '@angular/core';
import { Paciente } from '../models/paciente-model';
import { PacienteService } from 'src/services/service-paciente/paciente.service';

@Component({
  selector: 'app-tab-prontuario',
  templateUrl: 'tab-prontuario.page.html',
  styleUrls: ['tab-prontuario.page.scss']
})

export class TabProntuarioPage {
  paciente: Paciente;

  constructor(private PacienteService: PacienteService) { }

  ngOnInit(): void {
    this.loadPaciente();
  }

  loadPaciente() {
    this.PacienteService.getPaciente("42721722808").subscribe(
      sucess => {
        this.paciente = sucess;
        console.log(this.paciente);
      },
      error => {
        console.log(error);
      }
    );
  }
}
