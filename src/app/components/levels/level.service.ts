import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/config/api.url.config';
import { Level } from 'src/app/shared/Levels';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient) { }

  getLevels(): Observable<any> {
    return this.http.get(API_URLS.Levels_URL);
  }

  addLevel(level: Level): Observable<any> {
    return this.http.post(API_URLS.Levels_URL, level);
  }

  deleteLevel(id: number): Observable<any> {
    return this.http.delete(API_URLS.Levels_URL + `/${id}`);
  }

  updateLevel(level: Level): Observable<any> {
    return this.http.put(API_URLS.Levels_URL + `/${level.id}`, level);
  }

}
