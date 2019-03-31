import { Vacina } from './../../models/carteira-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.scss'],
})
export class AcordionComponent implements OnInit {
  
  vacina: Vacina;
  private expanded: boolean = false;

  constructor() { 
    this.vacina = new Vacina();
  }

  ngOnInit() {}

  @Input() set Vacina(vacina: Vacina) {
    this.vacina = vacina;
  }

  Expand(){
    this.expanded = !this.expanded;
  }

  Style() {
    return {'display': this.expanded == true ? 'block' : 'none' };
  }

  IconHeader() {
    return this.expanded == true ? "arrow-dropup" : "arrow-dropdown";
  }

}
