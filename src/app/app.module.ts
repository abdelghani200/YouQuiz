import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartComponent } from './components/chart/chart.component';
import { DatatableComponent } from './components/subjects/datatable/datatable.component';
import { FormaddComponent } from './components/subjects/formadd/formadd.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    ResultsComponent,
    ChartComponent,
    DatatableComponent,
    FormaddComponent,
    StatisticsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
