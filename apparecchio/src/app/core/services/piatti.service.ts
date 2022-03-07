import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, pipe} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Piatto } from '../../models/piatto';
import { ErrorhttpService } from './errorhttp.service';
import {apiUrl} from '../../config/apiUrl';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PiattiService {

  constructor(private http: HttpClient, private httpError: ErrorhttpService) { }

  getPiatti(): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(`${apiUrl}piatti`)
                    .pipe(catchError(this.httpError.errorHandler));
  }
  getPiatto(id: number): Observable<Piatto> {
    return this.http.get<Piatto>(`${apiUrl}piatti/${id}`)
      .pipe(catchError(this.httpError.errorHandler));
  }

  getPizzaInEvidenza(): Observable<Piatto[]>{
    return this.http.get<Piatto[]>(`${apiUrl}piatti?inevidenza=true`)
                    .pipe(catchError(this.httpError.errorHandler));
  }
  postCommento(data: Piatto, id: number): Observable<Piatto> {
    return this.http.post<Piatto>(`${apiUrl}piatti/${id}`, data)
      .pipe(catchError(this.httpError.errorHandler));
  }

}

