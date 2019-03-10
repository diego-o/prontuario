import { Atendimento } from './../../models/atendimento-model';
import { BaseService } from './../service-base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProntuarioService extends BaseService {

  constructor(private HttpClient: HttpClient) {
    super(HttpClient);
  }

  public atendimentos(cpf: string): Observable<Atendimento[]> {
    return this.get<Atendimento[]>("prontuario/atendimento/cpf/" + cpf);
  }
}
