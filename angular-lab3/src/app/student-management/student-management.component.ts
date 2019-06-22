import { Component, OnInit } from '@angular/core';
import { Student } from '../student-item/student-model';
import { empty } from 'rxjs';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  students: Student[];

  constructor() { 
    this.students = [
      new Student('name1', 'name1', '1111111'),
      new Student('name2', 'name2', '2222222'),
      new Student('name3', 'name3', '3333333'),
      new Student('name4', 'name4', '4444444')
    ]
  }

  ngOnInit() {
  }

  addStudent(name: HTMLInputElement, surname: HTMLInputElement, privateNumber: HTMLInputElement): boolean {

    if (name.value != '' && surname.value != '' && privateNumber.value != ''){
      this.students.push(new Student(name.value, surname.value, privateNumber.value));
      name.value ='';
      surname.value = '';
      privateNumber.value = '';
    }
   
    return false;
    }
}
