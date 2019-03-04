import { BaseService } from './../service-base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends BaseService {

  constructor(http: HttpClient) { 
    super(http);
  }

  
}
