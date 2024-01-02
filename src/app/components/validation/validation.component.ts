import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { Validation } from 'src/app/shared/Validation';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {


  validationForm!: FormGroup;
  showAddForm = false;
  operation: string = 'add';

  validations!: Validation[];

  constructor(private serviceValidation: ValidationService ,private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.validationForm = this.fb.group({
      question_id: ['', Validators.required],
      response_id: ['', Validators.required],
      points: ['', Validators.required]
    });
  }

  addValidation() {
    const newValidation = this.validationForm.value;
    this.serviceValidation.validateQuestion(newValidation).subscribe(
      data => {
        this.validations = data;
        this.resetForm();
      }
    )
    
  }

  cancelAddOrEdit() {
    this.showAddForm = false;
    this.resetForm();
  }

  resetForm() {
    this.validationForm.reset();
  }
}
