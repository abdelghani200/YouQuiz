import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../../config/api.url.config'
import { Question } from 'src/app/shared/Question';
import { QuestionToQuiz } from 'src/app/shared/QuestionToQuiz';


@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any>{
    return this.http.get(API_URLS.Questions_URL);
  }

  addQuestion(question: Question): Observable<any>{
    return this.http.post(API_URLS.Questions_URL, question);
  }

  updateQuestion(question: Question): Observable<any>{
    return this.http.put(API_URLS.Questions_URL + `/${question.id}`, question);
  }

  deleteQuestion(id: number): Observable<any>{
    return  this.http.delete(API_URLS.Questions_URL + `/${id}`);
  }

  QuestionToQuiz(questionToquiz: QuestionToQuiz): Observable<any>{
    return  this.http.post(API_URLS.QuizToQuestion_URL, questionToquiz);
  }


}
