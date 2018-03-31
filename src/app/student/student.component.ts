import { Component, OnInit } from '@angular/core';
import { StudentdataService, User } from 'app/student/studentdata.service';

import {NgForm} from '@angular/forms'
import {FormsModule} from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import { Student } from 'shared/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentdataService]
})
export class StudentComponent implements OnInit {
  
  studentList : Student[];
  userList:User[];
  constructor(private studentService: StudentdataService) { }

  ngOnInit() {


    console.log(this.userList);
      this.studentService.getUser().subscribe(data=>this.userList=data)
      console.log(this.userList);
  }
  
}
