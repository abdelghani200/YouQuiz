import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/Student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{

  students!: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudens()
  }

  loadStudens(){
    this.studentService.getStudents().subscribe(
        data  => { this.students = data},
        error  => { console.log('An error was occured.')},
        () => { console.log('loading students was done.')}
    );
}

}
