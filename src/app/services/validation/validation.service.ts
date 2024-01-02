import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/config/api.url.config';
import { Validation } from 'src/app/shared/Validation';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {



  constructor(private http: HttpClient) { }

  validateQuestion(validation: Validation): Observable<Validation[]> {
    return this.http.post<Validation[]>(API_URLS.Validation_URL, validation);
  }

  getAllValidations(): Observable<Validation[]>{
    return this.http.get<Validation[]>(API_URLS.Validation_URL)
  }

}
