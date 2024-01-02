import { Component, OnInit } from '@angular/core';
import { LevelDataService } from 'src/app/services/DataLevels/level-data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  levels: any[] = [];

  totalLevels: number = 0;

  constructor(private levelDataService: LevelDataService) {}

  ngOnInit(): void {
    // this.getStatisticsLevels();
    this.calculateTotalLevels()
  }

  // getStatisticsLevels() {
  //   this.levelDataService.levels$.subscribe(levels => {
  //     this.levels = levels;
  //     console.log(levels)
  //   });
  // }


  calculateTotalLevels() {
    this.totalLevels = this.levelDataService.getTotalLevels();
    console.log('Total levels 11233:', this.totalLevels);
  }

}