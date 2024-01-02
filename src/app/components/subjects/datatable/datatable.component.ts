import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/shared/Subject';
import { SubjectService } from './subject.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  subjects!: Subject[];

  operation = 'add';

  subjectForm!: FormGroup;

  showAddForm = false;

  selectedQuiz: Subject | null = null;


  constructor(private subjectService: SubjectService, private fb: FormBuilder) {
    this.createForm()
   }

  ngOnInit(): void {
    this.loadSubjects()
  }

  loadSubjects() {
    this.subjectService.getSubjects().subscribe(
      data => {
        this.subjects = data;
        console.log(data)
      },
      error => {
        console.log('An error was occured.')
      },
      () => {
        console.log('loading subjects was done.')
      }
    );
  }



  getSubjects(): Subject[] {
    return this.subjects;
  }



  addSubject() {
    const newQuiz = this.subjectForm.value as Subject;
    this.subjectService.addSubject(newQuiz).subscribe(
      (res) => {
        this.getSubjects();
        this.restForm();
        Swal.fire('Success', 'Subject deleted successfully!', 'success');
      },
      (error) => {
        Swal.fire('Error', 'Failed to delete subject', 'error');
      }
    );
  }

  cancelAddOrEdit() {
    this.operation = 'add';
    this.restForm();
  }

  restForm() {
    this.showAddForm = false;
    this.subjectForm.reset();
  }

  updateSubject(){}

  createForm() {
    this.subjectForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      parent_id: ['', Validators.required]
    });
  }


}
