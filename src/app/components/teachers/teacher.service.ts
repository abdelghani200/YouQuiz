import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/config/api.url.config';
import { Teacher } from 'src/app/shared/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<any> {
    return this.http.get(API_URLS.Teachers_URL);
  }

  addTeacher(teacher: Teacher): Observable<any> {
    return this.http.post(API_URLS.Teachers_URL, teacher);
  }

  updateTeacher(teacher: Teacher): Observable<any> {
    return this.http.put(API_URLS.Teachers_URL + `/${teacher.id}`, teacher);
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.delete(API_URLS.Teachers_URL + `/${id}`)
  }

}
