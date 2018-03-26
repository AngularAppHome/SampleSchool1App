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
  selectedStudent : any = {};

  p: number = 1;
 
  selected: Student;

  userList : User[];
  constructor(private studentService: StudentdataService) { }

  ngOnInit() {
    debugger
    this.getAllStudent();
    this.studentService.getUser().subscribe(data=>this.userList = data);
    console.log(this.userList);
  }
  getAllStudent(){
    this.studentService
    .getStudent()
    .subscribe((data:Student[])=>this.studentList = data,
    () => console.log("getAllStudent() complete from init"));
  }
 
  // onSubmit(f:NgForm){
  //   debugger 
  //   console.log(f.value);
  //   this.studentService.saveStudent(f.value);
  // }

  onSubmit(f: NgForm) {
    debugger
    if (f.value.Id == null) {
      this.studentService.saveStudent(f.value)
        .subscribe(data =>{
          f.reset();
          this.getAllStudent();
          console.log('New Record Added Succcessfully', 'Student Added');
        })
    }
    else {
      debugger
      this.studentService.updateStudent(f.value)
      .subscribe(data => {
        f.reset();
        this.getAllStudent();
        console.log('Record Updated Successfully!', 'Selected Student Modified');
      });
    }
  }


  showForEdit(std: Student) {
    this.selectedStudent = Object.assign({}, std);
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
function handleException(error: any) {
  // log error
  let errorMsg = error.message || `Problem accessing the data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}