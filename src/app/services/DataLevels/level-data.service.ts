import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Level } from 'src/app/shared/Levels';

@Injectable({
  providedIn: 'root'
})
export class LevelDataService {

  private levelsSource = new BehaviorSubject<Level[]>([]);

  levels$ = this.levelsSource.asObservable();

  setLevels(levels: Level[]) {
    this.levelsSource.next(levels);
  }

  getTotalLevels(): number {
    const levels = this.levelsSource.value;
    return levels ? levels.length : 0;
  }

}
