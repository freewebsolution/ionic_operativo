import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Piatto } from '../models/piatto';
import { ErrorhttpService } from './errorhttp.service';
import {apiUrl} from '.././config/apiUrl';
@Injectable({
  providedIn: 'root'
})
export class PiattiService {

  constructor(private http: HttpClient, private httpError: ErrorhttpService) { }

  getPiatti(): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(`${apiUrl}piatti`);
                    //.pipe(catchError(this.httpError.errorHandler));
  }
}

