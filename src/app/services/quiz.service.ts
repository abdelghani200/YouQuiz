import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../shared/Quiz';
import { API_URLS } from '../config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class QuizService {


  constructor(private http: HttpClient) { }

  getQuiz(): Observable<Quiz[]>{
    return this.http.get<Quiz[]>(API_URLS.Quiz_URL);
  }

  addQuiz(quiz: Quiz): Observable<Quiz[]>{
    return this.http.post<Quiz[]>(API_URLS.Quiz_URL, quiz)
  }

  updateQuiz(quiz: Quiz): Observable<Quiz[]>{
    return this.http.put<Quiz[]>(API_URLS.Quiz_URL + `/${quiz.id}`, quiz)
  }

  deleteQuiz(id: number): Observable<Quiz[]>{
    return this.http.delete<Quiz[]>(API_URLS.Quiz_URL + `/${id}`)
  }

  getQuestionToQuiz(): Observable<any>{
    return this.http.get(API_URLS.QuizToQuestion_URL);
  }


}
