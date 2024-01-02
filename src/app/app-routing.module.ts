import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './components/subjects/datatable/datatable.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { StudentsComponent } from './components/students/students.component';
import { LevelsComponent } from './components/levels/levels.component';
import { AnswersComponent } from './components/answers/answers.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { MediasComponent } from './components/medias/medias.component';
import { ListeQuizComponent } from './components/PartieUsers/liste-quiz/liste-quiz.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { AssignmentquizComponent } from './components/assignmentquiz/assignmentquiz.component';
import { ResultsComponent } from './components/results/results.component';
import { ContenuUserComponent } from './components/PartieUsers/contenu-user/contenu-user.component';

const routes: Routes = [
  // { path: '', component: statisticsComponent},
  { path: 'datatable', component: DatatableComponent},
  { path: 'questions', component: QuestionsComponent},
  { path: 'students', component: StudentsComponent},
  { path: 'levels', component: LevelsComponent},
  { path: 'answers', component: AnswersComponent},
  { path: 'teachers', component: TeachersComponent},
  { path: 'medias', component: MediasComponent},
  { path: 'listeQuiz', component: ListeQuizComponent},
  { path: 'quizzes', component: QuizzesComponent},
  { path: 'assegnmentquiz', component: AssignmentquizComponent},
  { path: 'results', component: ResultsComponent},
  { path: '', component: ContenuUserComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
