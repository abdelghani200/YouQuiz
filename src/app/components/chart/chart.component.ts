import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  single: any[] = [
    {
      name: 'Category A',
      value: 10
    },
    {
      name: 'Category B',
      value: 15
    },
    {
      name: 'Category C',
      value: 8
    },
    {
      name: 'Category D',
      value: 10
    }
    // Ajoutez d'autres données si nécessaire
  ];

  // Définissez le schéma de couleurs correctement sous forme de tableau d'objets
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };  

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'X-Axis Label';
  yAxisLabel = 'Y-Axis Label';
}
