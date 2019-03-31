import { Usuario } from 'src/models/usuario-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../service-base/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public Logar(Usuario: Usuario): Observable<Usuario> {
    return this.post<Usuario>("auth/paciente/login", Usuario);
  }
}
