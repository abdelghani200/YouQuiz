import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private  http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get(API_URLS.Students_URL);
  }

}
