import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Piatto} from "../models/piatto";
import {apiUrl} from "../config/apiUrl";
import {ErrorhttpService} from "./errorhttp.service";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InsalatoneService {

  constructor(private http: HttpClient, private httpError: ErrorhttpService) {
  }

  getInsalatone(): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(`${apiUrl}insalate`)
      .pipe(catchError(this.httpError.errorHandler));
  }
}
