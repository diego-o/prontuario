import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../service-base/base.service';
import { Paciente } from 'src/models/paciente-model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends BaseService {

  private _paciente: Paciente;

  constructor(http: HttpClient) {
    super(http)
  }

  SetPaciente(Paciente: any) {
    this._paciente = Paciente;
  }

  get Paciente(){
    return this._paciente;
  }

  public getPaciente(cpf: string): Observable<Paciente> {
    return this.get<Paciente>("paciente/cpf/" + cpf);
  }
}
