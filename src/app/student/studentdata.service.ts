import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Student } from 'shared/student.model';
import { ROOT_URL } from 'shared/Config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';





@Injectable()
export class StudentdataService {

  students: Observable < Student[] > ;
  newstudent: Observable < Student > ;
  constructor(private http: HttpClient) {
  }
  getStudent() {
      return this.http.get < Student[] > (ROOT_URL + '/student.json')

  }

}
