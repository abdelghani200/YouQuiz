import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/PartieUsers/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DatatableComponent } from './components/subjects/datatable/datatable.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionServiceService } from './components/questions/question-service.service';
import { StudentsComponent } from './components/students/students.component';
import { LevelsComponent } from './components/levels/levels.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AnswersComponent } from './components/answers/answers.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { MediasComponent } from './components/medias/medias.component';
import { ListeQuizComponent } from './components/PartieUsers/liste-quiz/liste-quiz.component';
import { ContenuUserComponent } from './components/PartieUsers/contenu-user/contenu-user.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { AssignmentquizComponent } from './components/assignmentquiz/assignmentquiz.component';
import { CommonFormComponentComponent } from './shared/common-form-component/common-form-component.component';
import { ValidationComponent } from './components/validation/validation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    ResultsComponent,
    DatatableComponent,
    StatisticsComponent,
    QuestionsComponent,
    StudentsComponent,
    CommonFormComponentComponent,
    LevelsComponent,
    AnswersComponent,
    TeachersComponent,
    MediasComponent,
    ListeQuizComponent,
    ContenuUserComponent,
    QuizzesComponent,
    AssignmentquizComponent,
    ValidationComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [QuestionServiceService],
  bootstrap: [AppComponent,LevelsComponent]
})
export class AppModule { }
