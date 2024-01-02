import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/config/api.url.config';
import { Subject } from 'src/app/shared/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<any> {
    return this.http.get(API_URLS.Subjects_URL);
  }

  addSubject(subject: Subject): Observable<any> {
    return this.http.post(API_URLS.Subjects_URL, subject);
  }

  updateSubject(subject: Subject): Observable<any> {
    return this.http.put(API_URLS.Subjects_URL + `${subject.id}`, subject);
  }


}
