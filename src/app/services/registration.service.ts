import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  //linea json string  de firebase storage
  private jsonUrl = "https://firebasestorage.googleapis.com/v0/b/tabletop-f69fe.appspot.com/o/tabletopUser.json?alt=media&token=7abce58d-04c5-455e-8a00-d4cafacee284";

  //http headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  //metodo post ad usre
  addUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.jsonUrl}`, userData, this.httpOptions);
  }
  //metodo get Register user
  getRegisterUser(): Observable<any> {
    return this.http.get<any>(`${this.jsonUrl}`, this.httpOptions);
  }

}
