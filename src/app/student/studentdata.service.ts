import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Student } from 'shared/student.model';
import { ROOT_URL } from 'shared/Config';


@Injectable()
export class StudentdataService {
 //private _url: string = "http://localhost:61033/api/User";
  private _Userurl: string = "http://localhost:61033/api/User";

  //http://localhost/webApi/api/user
  // students: Observable < Student[] > ;
  // newstudent: Observable < Student > ;

  getUser():Observable<User[]>{

    return this.http.get<User[]>(this._Userurl);
  }


  constructor(private http: HttpClient) {
  }
 
  // getStudent(): Observable<Student[]>{
  //   return this.http.get<Student[]>(this._url);
  // }

}
export class User{
  id : number;
  name : string;
  email : string;
  password : string; 
}
