import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignInServiceService {

  //private apiUrl = 'https://opposite-scarf-production.up.railway.app/api/finanzasgrupo4/v1/employee';
  private apiUrl = 'http://localhost:8080/api/finanzasgrupo4/v1/employee';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/email/${email}/password/${password}`;
    return this.http.get(url);
  }
}
