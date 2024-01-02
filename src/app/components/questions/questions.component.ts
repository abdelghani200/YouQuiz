import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuestionServiceService } from '../questions/question-service.service';
import { Question } from 'src/app/shared/Question';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Level } from 'src/app/shared/Levels';
import { LevelService } from '../levels/level.service';
import { SubjectService } from '../subjects/datatable/subject.service';
import { Subject } from 'src/app/shared/Subject';
import Swal from 'sweetalert2';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { Router } from '@angular/router';
import { AnswerService } from '../answers/answer.service';
import { Answer } from 'src/app/shared/Answer';
import { Validation } from 'src/app/shared/Validation';
import { QuestionToQuiz } from 'src/app/shared/QuestionToQuiz';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/shared/Quiz';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Output() validationAdded: EventEmitter<any> = new EventEmitter();

  questions!: Question[];

  questionForm!: FormGroup;

  validationForm!: FormGroup;

  operation: String = 'add';

  showAddForm = false;

  quizzes!: Quiz[];

  showValidationForm1 = false;

  selectedQuestion: Question | null = null;

  levels: Level[] = [];

  subjects: Subject[] = [];

  answers!: Answer[];

  validations!: Validation[];

  showValidationPopup: boolean = false;

  showQueToQuizPopup: boolean = false;

  showQuesToQuizPopup: boolean = false;

  questionToQuiz!: QuestionToQuiz[];

  questionToQuizForm!: FormGroup;


  validatedQuestions: number[] = [];

  constructor(private questionService: QuestionServiceService, private fb: FormBuilder, private levelsService: LevelService, private subjectsService: SubjectService,
    private serviceValidation: ValidationService, private router: Router, private serviceAnswer: AnswerService, private quizService: QuizService) {
    this.createForm();
    this.createFormValidation();
    this.createQuestionToQuizForm();
  }





  ngOnInit(): void {
    this.loadQuestions();
    this.getLevels();
    this.getSubjects();
    this.loadAnswers();
    this.getValidations();
    this.getAllQuizzes()
  }

  createForm() {
    this.questionForm = this.fb.group({
      text: '',
      answerNumber: '',
      answerCorrectNumber: '',
      type: '',
      scorePoints: '',
      level_id: ['', Validators.required],
      subject_id: ['', Validators.required],
    });
  }

  createFormValidation() {
    this.validationForm = this.fb.group({
      question_id: ['', Validators.required],
      response_id: ['', Validators.required],
      // response_id: this.fb.array([]),
      points: ['', Validators.required]
    });
  }


  createQuestionToQuizForm() {
    this.questionToQuizForm = this.fb.group({
      question_id: ['', Validators.required],
      quiz_id: ['', Validators.required],
      time: '',
    });
  }

  loadQuestions() {
    this.questionService.getQuestions().subscribe((data) => {
      this.questions = data;
      console.log(data);
    })
  }

  loadAnswers() {
    this.serviceAnswer.getAnswers().subscribe((data) => {
      this.answers = data;
    })
  }


  getAllQuizzes() {
    this.quizService.getQuiz().subscribe(
      data => {
        this.quizzes = data;
      }
    );
  }


  addQuestion() {
    const newQuestion = this.questionForm.value as Question;

    console.log(newQuestion)

    this.questionService.addQuestion(newQuestion).subscribe(
      res => {
        this.loadQuestions();
        this.resetForm();
        Swal.fire('Success', 'Question added successfully!', 'success');
      },
      error => {
        Swal.fire('Error', 'Failed to add question', 'error');
      }
    )
  }


  deleteQuestion(id: number | undefined) {
    if (id !== undefined) {
      this.questionService.deleteQuestion(id).subscribe(
        res => {
          this.selectedQuestion = null;
          this.loadQuestions();
          Swal.fire('Success', 'Question deleted successfully!', 'success');
        },
        () => {
          Swal.fire('Error', 'Failed to delete question', 'error');
        }
      );
    } else {
      Swal.fire('Error', 'No question selected, cannot delete', 'error');
    }
  }

  cancelAddOrEdit() {
    this.operation = 'add';
    this.resetForm();
  }



  resetForm() {
    this.showAddForm = false;
    this.showValidationForm1 = false;
    this.showQueToQuizPopup = false;
    this.questionForm.reset();
    this.validationForm.reset();
    this.questionToQuizForm.reset();
  }



  updateQuestion() {
    if (this.selectedQuestion) {
      this.selectedQuestion.answerNumber = this.questionForm.get('answerNumber')?.value;
      this.selectedQuestion.answerCorrectNumber = this.questionForm.get('answerCorrectNumber')?.value;
      this.selectedQuestion.scorePoints = this.questionForm.get('scorePoints')?.value;
      this.selectedQuestion.text = this.questionForm.get('text')?.value;


      this.questionService.updateQuestion(this.selectedQuestion).subscribe(
        () => {
          this.loadQuestions();
          Swal.fire('Success', 'Question updated successfully!', 'success');
          this.resetForm();
        },
        () => {
          Swal.fire('Error', 'Failed to update question', 'error');
          this.resetForm()
        }
      );
    } else {
      Swal.fire('Error', 'Selected question is undefined, cannot update', 'error');
    }

  }


  getLevels() {
    this.levelsService.getLevels().subscribe(
      data => {
        this.levels = data;
        console.log(data);
      }
    );
  }

  getSubjects() {
    this.subjectsService.getSubjects().subscribe(
      data => {
        this.subjects = data;
        console.log(data)
      }
    );
  }


  editQuestion(question: Question) {
    this.operation = 'update';
    this.selectedQuestion = question;
    console.log("Level description:", question.id);
    this.questionForm.setValue({
      text: question.text,
      answerNumber: question.answerNumber,
      answerCorrectNumber: question.answerCorrectNumber,
      type: question.type,
      scorePoints: question.scorePoints,
      level_id: question.level?.id,
      subject_id: question.subject?.id
    });
    this.showAddForm = true;
  }

  validateQuestion(questionId: number | undefined) {

    if (questionId !== undefined) {
      this.validatedQuestions.push(questionId);
    }

    this.validationForm.patchValue({
      question_id: questionId,
    });

    this.showValidationForm1 = true;
  }



  closeModal() {
    this.showValidationForm1 = false;
  }

  onSubmit() {
    this.showValidationForm1 = false;
  }


  formFields: any[] = [
    { label: 'Question', inputType: 'number', inputName: 'question_id', inputId: 'question_id', formControlName: 'question_id', placeholder: 'Id question', isRequired: true },
    { label: 'Response', inputType: 'number', inputName: 'response_id', inputId: 'response_id', formControlName: 'response_id', placeholder: 'response_id', isRequired: true },
    { label: 'Points', inputType: 'number', inputName: 'points', inputId: 'points', formControlName: 'points', placeholder: 'points', isRequired: true },
  ];


  isValidated(questionId: number | undefined): boolean {
    return questionId !== undefined && this.validatedQuestions.includes(questionId);
  }


  navigateToListValidation() {
    this.showValidationPopup = true;
  }

  closeValidationPopup() {
    this.showValidationPopup = false;
  }


  navigateToQuestionToQuiz() {
    this.showQueToQuizPopup = true
  }

  navigateToValidation() {
    this.showValidationForm1 = true;
  }


  addValidation() {
    const newValidation = this.validationForm.value;
    this.serviceValidation.validateQuestion(newValidation).subscribe(
      data => {
        this.validations = data;
        this.resetForm();
        Swal.fire('Success', 'validation added successfully!', 'success');
      }
    )

  }

  addQuestionToQuiz() {
    const newValidation = this.questionToQuizForm.value as QuestionToQuiz;
    console.log(newValidation);
    this.questionService.QuestionToQuiz(newValidation).subscribe(
      res => {
        this.resetForm();
        Swal.fire('Success', 'Question added successfully!', 'success');
      }
    )

  }


  getValidations() {
    this.serviceValidation.getAllValidations().subscribe(
      data => {
        this.validations = data;
        console.log(data)

      })
  }




  updateValidation() { }


  // get answersFormArray() {
  //   return this.validationForm.get('response_id') as FormArray;
  // }

  // addAnswer() {
  //   this.answersFormArray.push(new FormControl('', Validators.required));
  // }



}
