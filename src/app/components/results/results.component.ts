import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { QuestionToQuiz } from 'src/app/shared/QuestionToQuiz';
import { Validation } from 'src/app/shared/Validation';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  quizDisplayed!: QuestionToQuiz[];

  currentQuestionIndex: number = 0;

  validations!: Validation[];

  selectedAnswer: any = null;

  totalScore: number = 0;

  showResultsPopup: boolean = false;


  constructor(private quizService: QuizService, private validationService: ValidationService) { }

  ngOnInit(): void {
    this.getQuiz();
    this.getValidations()
  }

  getQuiz() {
    this.quizService.getQuestionToQuiz().subscribe(
      data => {
        this.quizDisplayed = data;
        console.log(data)
      }
    )
  }


  nextQuestion() {
    const scoreForCurrentQuestion = this.calculateScore();
    this.totalScore += scoreForCurrentQuestion;

    if (this.currentQuestionIndex < this.quizDisplayed.length - 1) {
      this.currentQuestionIndex++;
    } else {
      console.log("Score total:", this.totalScore);
    }
  }



  getValidations() {
    this.validationService.getAllValidations().subscribe(
      data => {
        this.validations = data;
        console.log(data)

      })
  }

  getAnswersForCurrentQuestion(): any[] {
    const currentQuestion = this.quizDisplayed[this.currentQuestionIndex]?.question;
    const answers = this.validations.filter(validation => validation.question.id === currentQuestion?.id);

    console.log(answers);

    return answers;
  }

  selectAnswer(answer: any) {
    this.selectedAnswer = answer;

  }

  getColorClass(answer: any): string {
    const colors = ['bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-blue-500'];
    const colorIndex = this.getAnswersForCurrentQuestion().indexOf(answer) % colors.length;
    return colors[colorIndex];
  }


  getEmojisForScore(score: number): string {
    
    if (score >= 2) {
        return '😊🎉';
    } else {
        return '😐'; // Autre exemple
    }
}





  calculateScore(): number {
    const currentQuestion = this.quizDisplayed[this.currentQuestionIndex]?.question;
    const selectedAnswer = this.selectedAnswer;

    if (currentQuestion && selectedAnswer) {
      const matchingValidation = this.validations.find(
        v => v.question.id === currentQuestion.id && v.answer.id === selectedAnswer.answer.id
      );

      if (matchingValidation) {
        return matchingValidation.points;
      }
    }

    return 0;
  }





  toggleResultsPopup() {
    this.showResultsPopup = !this.showResultsPopup;
  }


  showResultsButtonVisible(): boolean {
    return this.currentQuestionIndex === this.quizDisplayed.length - 1;
  }




}
