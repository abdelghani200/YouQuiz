import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormaddComponent } from './components/subjects/formadd/formadd.component';
import { ChartComponent } from './components/chart/chart.component';
import { DatatableComponent } from './components/subjects/datatable/datatable.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
  { path: '', component: StatisticsComponent},
  { path: 'datatable', component: DatatableComponent},
  { path: 'formadd', component: FormaddComponent },
  { path: 'chart', component: ChartComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
