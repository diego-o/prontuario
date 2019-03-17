import { Atendimento } from './../../models/atendimento-model';
import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-atendimento',
  templateUrl: './modal-atendimento.page.html',
  styleUrls: ['./modal-atendimento.page.scss'],
})
export class ModalAtendimentoPage implements OnInit {
  private _atendimento: Atendimento;
  
  constructor(
    private NavParams: NavParams,
    private ModalController: ModalController
  ) { 
    this._atendimento = new Atendimento();
  }

  get Atendimento(): Atendimento {
    return this._atendimento;
  }

  ngOnInit() {
    this._atendimento = this.NavParams.get('atendimento');
    console.log(this._atendimento);
  }

  closeModal(){
    this.ModalController.dismiss();
  }
}
