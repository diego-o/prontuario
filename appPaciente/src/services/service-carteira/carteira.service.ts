import { Carteira } from './../../models/carteira-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../service-base/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService extends BaseService {

  constructor(HttpClient: HttpClient) { 
    super(HttpClient);
  }

  public carteira(numeroCarteira: string): Observable<Carteira> {
    return this.get<Carteira>("carteiravacina/numerocarteira/" + numeroCarteira);
  }
}
