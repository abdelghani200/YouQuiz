import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/shared/Teacher';
import { TeacherService } from './teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit{

  teachers!: Teacher[];

  showAddForm: boolean = false;

  selectedTeacher: Teacher = new Teacher();

  operation: String = 'add';

  newTeacher: Teacher = {
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    address: '',
    speciality: '',
  };

  constructor(private teacherService: TeacherService)
  {

  }

  ngOnInit(): void {
    this.getTeachers()
  }

  getTeachers() {
    this.teacherService.getTeachers().subscribe(
      data => {
        this.teachers = data
      }
    )
  }

  addTeacher() {
    this.teacherService.addTeacher(this.selectedTeacher).subscribe(
      res => {
        this.getTeachers();
        this.selectedTeacher = new Teacher();
        this.resetForm();
        Swal.fire('Success', 'Teacher added successfully!', 'success');
      },
      error => {
        Swal.fire('Error', 'Failed to add teacher', 'error');
      }
    )
  }

  updateTeacher() {
    this.teacherService.updateTeacher(this.selectedTeacher).subscribe(
      res => {
        this.getTeachers();
        this.selectedTeacher = new Teacher();
        this.resetForm();
        Swal.fire('Success', 'Teacher updated successfully!', 'success');
      },
      error => {
        Swal.fire('Error', 'Failed to update teacher', 'error');
      }
    )
  }

  deleteTeacher(id: number | undefined) {
    if (id !== undefined) {
      this.teacherService.deleteTeacher(id).subscribe(
        res => {
          this.selectedTeacher = new Teacher();
          this.getTeachers();
          Swal.fire('Success', 'Teacher deleted successfully!', 'success');
        },
        (error) => {
          console.error('Error deleting teacher:', error);
          Swal.fire('Error', 'Failed to delete teacher', 'error');
        }
      );
    } else {
      Swal.fire('Error', 'No teacher selected, cannot delete', 'error');
    }
  }

  cancelAddOrEdit() {
    this.operation = 'add';

  }

  resetForm() {
    this.showAddForm = false;
    this.selectedTeacher = new Teacher();
  }
  

}
