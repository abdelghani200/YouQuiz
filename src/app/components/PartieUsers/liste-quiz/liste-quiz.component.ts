import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/services/assignment.service';
import { Assignment } from 'src/app/shared/Assignment';
import { Quiz } from 'src/app/shared/Quiz';

@Component({
  selector: 'app-liste-quiz',
  templateUrl: './liste-quiz.component.html',
  styleUrls: ['./liste-quiz.component.css']
})
export class ListeQuizComponent implements OnInit{

  assignments!: Assignment[];

  constructor(private assignmentService: AssignmentService)
  {

  }

  ngOnInit(): void {
    this.getAllQuiz();
  }


  // changeQuizImage(quizId: string) {
  //   const quizImage = document.getElementById(quizId + 'Image') as HTMLImageElement;
  //   const randomImageId = Math.floor(Math.random() * 1000);
  //   quizImage.src = `https://picsum.photos/512/512?random=${randomImageId}`;
  // }


  getAllQuiz() {
    this.assignmentService.getAllAssignment().subscribe(
      data => {
        this.assignments = data;

        console.log(data)
      }
    )
  }



}
