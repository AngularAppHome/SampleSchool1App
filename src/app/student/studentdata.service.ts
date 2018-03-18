import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Student } from 'shared/student.model';
import { ROOT_URL } from 'shared/Config';


@Injectable()
export class StudentdataService {
  private _url: string = "assets/stubby/student.json";

  students: Observable < Student[] > ;
  newstudent: Observable < Student > ;

  constructor(private http: HttpClient) {
  }
 
  getStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this._url);
  }

}
