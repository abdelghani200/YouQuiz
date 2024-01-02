import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/config/api.url.config';
import { Answer } from 'src/app/shared/Answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  getAnswers(): Observable<any> {
    return this.http.get(API_URLS.Answers_URL);
  }

  addAnswer(answer: Answer): Observable<any> {
    return this.http.post(API_URLS.Answers_URL, answer);
  }

  updateAnswer(answer: Answer): Observable<any>{
    return this.http.put(API_URLS.Answers_URL + `/${answer.id}`, answer);
  }

  deleteAnswer(id: number): Observable<any> {
    return this.http.delete(API_URLS.Answers_URL + `/${id}`);
  }
  

}
