import { Component, OnInit } from '@angular/core';
import { StudentdataService } from 'app/student/studentdata.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentdataService]
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
