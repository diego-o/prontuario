import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/models/paciente-model';
import { BaseService } from '../service-base/base.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends BaseService {

  constructor(http: HttpClient) { 
    super(http)
  }

  public getPaciente(cpf: string) : Observable<Paciente>  {
    return this.get<Paciente>("paciente/cpf/" + cpf);
  }
}
