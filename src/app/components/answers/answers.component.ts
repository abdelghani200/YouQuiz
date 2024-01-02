import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Answer } from 'src/app/shared/Answer';
import { AnswerService } from './answer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  answers!: Answer[];

  answerForm!: FormGroup;

  operation: String = 'add';

  selectedAnswer: Answer | null = null;

  showAddForm = false;

  constructor(private answerService: AnswerService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.loadAnswers()
  }

  createForm() {
    this.answerForm = this.fb.group({
      answerText: '',
    })
  }

  loadAnswers() {
    this.answerService.getAnswers().subscribe((data) => {
      this.answers = data;
      // console.log(data);
    })
  }

  cancelAddOrEdit() {
    this.operation = 'add';
    this.resetForm()
  }

  
  addAnswer() {
    const newAnswer = this.answerForm.value as Answer;
    this.answerService.addAnswer(newAnswer).subscribe(
      res => {
        this.loadAnswers();
        this.resetForm();
        Swal.fire('Success', 'Answer added successfully!', 'success');
      },
      error => {
        Swal.fire('Error', 'Failed to add answer', 'error');
      }
    );
  }

  resetForm() {
    this.showAddForm = false;
    this.answerForm.reset();
  }


  updateAnswer() {
    console.log('Selected Answer before deletion:', this.selectedAnswer);
    if (this.selectedAnswer) {
      
      this.selectedAnswer.answerText = this.answerForm.get('answerText')?.value;
     
      this.answerService.updateAnswer(this.selectedAnswer).subscribe(
        () => {
          this.loadAnswers();
          Swal.fire('Success', 'Answer updated successfully!', 'success');
          this.resetForm();
        },
        () => {
          Swal.fire('Error', 'Failed to update answer', 'error');
          this.resetForm()
        }
      );
    } else {
       Swal.fire('Error', 'Selected answer is undefined, cannot update', 'error');
    }
  }

  deleteAnswer(id: number | undefined) {
    console.log('Selected Answer before deletion:', this.selectedAnswer);
  
    if (id !== undefined) {
      this.answerService.deleteAnswer(id).subscribe(
        () => {
          this.selectedAnswer = null;
          this.loadAnswers();
          Swal.fire('Success', 'Answer deleted successfully!', 'success');
        },
        () => {
          Swal.fire('Error', 'Failed to delete answer', 'error');
        }
      );
    } else {
      console.log('No answer selected or selected answer has no ID');
      Swal.fire('Error', 'No answer selected, cannot delete', 'error');
    }
  }
  
  
  

  editAnswer(answer: Answer) {
    this.operation = 'update';
    this.selectedAnswer = answer;
    this.answerForm.setValue({
      answerText: answer.answerText

    });
    this.showAddForm = true;
  }

}
