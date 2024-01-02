import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssignmentService } from 'src/app/services/assignment.service';
import { Assignment } from 'src/app/shared/Assignment';


@Component({
  selector: 'app-assignmentquiz',
  templateUrl: './assignmentquiz.component.html',
  styleUrls: ['./assignmentquiz.component.css']
})
export class AssignmentquizComponent implements OnInit {

  assignments: Assignment[] = [];

  operation = 'add';

  assignmentForm!: FormGroup;

  showAddForm = false;

  selectedAssignment: Assignment | null = null;

  constructor(private assignmentService: AssignmentService, private fb: FormBuilder) { 
    this.initializeForm();
  }

  ngOnInit(): void {
    this.loadAssignments();
  }

  loadAssignments(): void {
    this.assignmentService.getAllAssignment().subscribe(
      (data: Assignment[]) => {
        this.assignments = data;

        console.log(data)
      },
      (error) => {
        console.error('Error fetching assignments:', error);
      }
    );
  }


  initializeForm(): void {
    this.assignmentForm = this.fb.group({
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      raison: '',
      score: [0, Validators.min(0)],
      attempt_number: [0, Validators.min(0)],
      score_final: [0, Validators.min(0)],
      quiz: '',
      student: '',
      students: this.fb.array([]),
      reponseList: this.fb.array([])
    });

    const defaultAssignment = new Assignment();
    this.assignmentForm.patchValue(defaultAssignment);
  }


  toggleForm(): void {
    this.showAddForm = !this.showAddForm;
    this.operation = 'add';
    this.selectedAssignment = null;
    this.assignmentForm.reset();
  }


  saveAssignment() {
    if (this.assignmentForm.valid) {
      const assignmentData: Assignment = this.assignmentForm.value;
      if (this.operation === 'add') {
        this.assignmentService.addAssignment(assignmentData).subscribe(
          (data: Assignment) => {
            this.assignments.push(data);
            this.toggleForm();
          },
          (error) => {
            console.error('Error adding assignment:', error);
          }
        );
      } else if (this.operation === 'edit' && this.selectedAssignment) {
        assignmentData.id = this.selectedAssignment.id;
        this.assignmentService.updateAssignment(assignmentData).subscribe(
          (data: Assignment) => {
            const index = this.assignments.findIndex(a => a.id === data.id);
            if (index !== -1) {
              this.assignments[index] = data;
            }
            this.toggleForm();
          },
          (error) => {
            console.error('Error updating assignment:', error);
          }
        );
      }
    }
  }


  deleteAssignment(id: number): void {
    this.assignmentService.deleteAssignment(id).subscribe(
      () => {
        this.assignments = this.assignments.filter(a => a.id !== id);
      },
      (error) => {
        console.error('Error deleting assignment:', error);
      }
    );
  }

  editAssignment(assignment: Assignment): void {
    this.operation = 'edit';
    this.selectedAssignment = assignment;
    this.showAddForm = true;
    this.assignmentForm.patchValue(assignment);
  }

  cnacelAddOrEdit() {
    this.showAddForm = false;
    this.assignmentForm.reset();
  }


}
