import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from '../shared/Assignment';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService implements OnInit{



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      
  }

  getAllAssignment(): Observable<Assignment[]>{
    return this.http.get<Assignment[]>(API_URLS.Assignment_URL)
  }

  addAssignment(assegnmentquiz: Assignment): Observable<Assignment>{
    return this.http.post<Assignment>(API_URLS.Assignment_URL, assegnmentquiz);
  }

  updateAssignment(assegnmentquiz: Assignment): Observable<Assignment>{
    return this.http.put<Assignment>(API_URLS.Assignment_URL + `/${assegnmentquiz.id}`, assegnmentquiz);
  }

  deleteAssignment(id: number): Observable<Assignment[]>{
    return this.http.delete<Assignment[]>(API_URLS.Assignment_URL + `/${id}`)
  }

}
