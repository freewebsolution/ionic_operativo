import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team';
import { ErrorhttpService } from './errorhttp.service';
import {apiUrl} from '.././config/apiUrl';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SociService {

  constructor(private http: HttpClient, private httpError: ErrorhttpService) { }

  getSoci(): Observable<Team[]> {
    return this.http.get<Team[]>(`${apiUrl}chisiamo`)
                    .pipe(catchError(this.httpError.errorHandler));
  }
}
