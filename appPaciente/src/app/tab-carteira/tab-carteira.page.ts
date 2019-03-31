import { Carteira } from './../../models/carteira-model';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/models/paciente-model';
import { PacienteService } from 'src/services/service-paciente/paciente.service';
import { CarteiraService } from 'src/services/service-carteira/carteira.service';

@Component({
  selector: 'app-tab-carteira',
  templateUrl: 'tab-carteira.page.html',
  styleUrls: ['tab-carteira.page.scss']
})
export class TabCarteiraPage implements OnInit {
  paciente: Paciente;
  carteira: Carteira;

  constructor(
    private PacienteService: PacienteService,
    private CarteiraService: CarteiraService
  ) {
    this.paciente = new Paciente();
    this.carteira = new Carteira();
  }

  ngOnInit(): void {
    this.loadPaciente();

  }

  loadPaciente() {
    this.paciente = this.PacienteService.Paciente;
    this.loadCarteira();
  }

  loadCarteira() {
    this.CarteiraService.carteira(this.paciente.cpf).subscribe(
      sucess => {
        this.carteira = sucess;
      },
      error => {
        console.log(error);
      }
    );
  }
}
