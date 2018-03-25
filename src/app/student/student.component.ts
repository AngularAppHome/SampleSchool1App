import { Component, OnInit } from '@angular/core';
import { StudentdataService, User } from 'app/student/studentdata.service';

import {NgForm} from '@angular/forms'
import {FormsModule} from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import { Student } from 'shared/student.model';
import { ISubscription } from 'rxjs/Subscription';
import { Console } from '@angular/core/src/console';
 


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentdataService]
})

export class StudentComponent implements OnInit {
  
  studentList : Student[];

  p: number = 1;
 

  selected: Student;

  userList : User[];
  constructor(private studentService: StudentdataService) { }
 

  ngOnInit() {
    debugger
     this.studentService.getStudent().subscribe(data=>this.studentList = data);
     this.studentService.getUser().subscribe(data=>this.userList = data);
     console.log(this.userList);
  }
  // onSubmit(f:NgForm){
  //   debugger 
  //   console.log(f.value);
  //   this.studentService.saveStudent(f.value);
  // }

  onSubmit(f: NgForm) {
    if (f.value.Id == null) {
      this.studentService.saveStudent(f.value)
       
        .subscribe(data =>{
          f.reset();
          this.studentService.getStudent().subscribe(data=>this.studentList = data);
          console.log('New Record Added Succcessfully', 'Student Added');
        })
    }
    else {
      this.studentService.updateStudent(f.value.Id, f.value)
      .subscribe(data => {
        this.studentService.getStudent().subscribe(data=>this.studentList = data);
        console.log('Record Updated Successfully!', 'Employee Register');
      });
    }

  }

 

  showForEdit(std: Student) {
    this.studentService.selectedStudent = Object.assign({}, std);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.studentService.deleteStudent(id)
      .subscribe(x => {
        this.studentService.getStudent();
        console.log("Deleted Successfully","Student from list");
      })
    }
  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // } 
}
