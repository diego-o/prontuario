import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  
  private _urlBase = "http://35.198.41.47/";

  constructor(private http: HttpClient) { }

  protected get<TClass>(endPoint: string) : Observable<TClass> {
    return this.http.get<TClass>(this.normalizeUrl(endPoint));
  }

  protected post<TClass>(endPoint: string, body: any) : Observable<TClass> {
    return this.http.post<TClass>(this.normalizeUrl(endPoint), body);
  }

  protected put<TClass>(endPoint: string, body: any) : Observable<TClass> {
    return this.http.put<TClass>(this.normalizeUrl(endPoint), body);
  }

  private normalizeUrl(endPoint: string): string {
    return this._urlBase + endPoint;
  }
}
