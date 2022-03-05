import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiUrl } from 'src/app/config/apiUrl';
import { Messaggio } from './../../models/messaggio';
import { ErrorhttpService } from './errorhttp.service';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  constructor(private http: HttpClient, private httpError: ErrorhttpService) { }

  //Aggiungi messaggio
  postMessaggio(data: any): Observable<Messaggio> {
    return this.http.post<Messaggio>(`${apiUrl}messaggi`,data)
      .pipe(catchError(this.httpError.errorHandler));
  }
}
