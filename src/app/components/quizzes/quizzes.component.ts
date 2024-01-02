import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/shared/Quiz';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes!: Quiz[];

  operation = 'add';

  quizForm!: FormGroup;

  showAddForm = false;

  selectedQuiz: Quiz | null = null;

  constructor(private quizService: QuizService, private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit(): void {
    this.getAllQuizzes()
  }

  createForm() {
    this.quizForm = this.fb.group(
      {
        title: '',
        start_Date: null,
        end_Date: null,
        successScore: '',
        viewAnswer: '',
        maxAttempts: '',
        instructions: '',
        remarks: '',
      }
    )
  }

  getAllQuizzes() {
    this.quizService.getQuiz().subscribe(
      data => {
        this.quizzes = data;
      }
    );
  }

  addQuiz() {
    const newQuiz = this.quizForm.value as Quiz;
    this.quizService.addQuiz(newQuiz).subscribe(
      (res) => {
        this.getAllQuizzes();
        this.restForm();
        Swal.fire('Success', 'Quiz deleted successfully!', 'success');
      },
      (error) => {
        Swal.fire('Error', 'Failed to delete quiz', 'error');
      }
    );
  }

  cnacelAddOrEdit() {
    this.operation = 'add';
    this.restForm();
  }

  restForm() {
    this.showAddForm = false;
    this.quizForm.reset();
  }


  deleteQuiz(id: number | undefined) {
    if (id !== undefined) {
      this.quizService.deleteQuiz(id).subscribe(
        res => {
          this.selectedQuiz = null;
          this.getAllQuizzes();
          Swal.fire('Success', 'Quiz deleted successfully!', 'success');
        },
        () => {
          Swal.fire('Error', 'Failed to delete quiz', 'error');
        }
      )
    }
  }

  updateQuiz() {
    if (this.selectedQuiz) {
      this.selectedQuiz.title = this.quizForm.get('title')?.value;
      this.selectedQuiz.start_Date = this.quizForm.get('start_Date')?.value;
      this.selectedQuiz.end_Date = this.quizForm.get('end_Date')?.value;
      this.selectedQuiz.maxAttempts = this.quizForm.get('maxAttempts')?.value;
      this.selectedQuiz.remarks = this.quizForm.get('remarks')?.value;
      this.selectedQuiz.successScore = this.quizForm.get('successScore')?.value;
      this.selectedQuiz.viewAnswer = this.quizForm.get('viewAnswer')?.value;

      this.quizService.updateQuiz(this.selectedQuiz).subscribe(
        () => {
          this.getAllQuizzes();
          Swal.fire('Success', 'Quiz updated successfully!', 'success');
          this.restForm();
        },
        () => {
          Swal.fire('Error', 'Failed to update quiz', 'error');
          this.restForm()
        }
      );
    } else {
      Swal.fire('Error', 'Selected quiz is undefined, cannot update', 'error');
    }
  }

  editQuiz(quiz: Quiz) {
    this.operation = 'update';
    this.selectedQuiz = quiz;
    console.log(quiz);
    this.quizForm.setValue({
      title: quiz.title,
      start_Date: quiz.start_Date,
      end_Date: quiz.end_Date,
      successScore: quiz.successScore,
      viewAnswer: quiz.viewAnswer,
      maxAttempts: quiz.maxAttempts,
      instructions: quiz.instructions,
      remarks: quiz.remarks,
    });
    this.showAddForm = true;
  }


}
