import { Paciente } from 'src/models/paciente-model';
import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-paciente',
  templateUrl: './modal-paciente.page.html',
  styleUrls: ['./modal-paciente.page.scss'],
})
export class ModalPacientePage {

  paciente: Paciente;

  constructor(private NavParams: NavParams,
    private ModalController: ModalController
  ) {
    this.paciente = new Paciente();
  }

  ngOnInit() {
    this.paciente = this.NavParams.get('paciente');
    console.log(this.paciente);
  }

  closeModal() {
    this.ModalController.dismiss();
  }
}
