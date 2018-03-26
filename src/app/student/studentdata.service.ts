import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Student } from 'shared/student.model';
import { ROOT_URL } from 'shared/Config';
import 'rxjs/add/operator/map';


@Injectable()
export class StudentdataService {
  private _url: string = "http://localhost:50001/api/students";

  private _usrurl :string = "http://localhost:50001/api/user";
  private _stdpost : string = "http://localhost:50001/api/students";

  // students: Observable < Student[] > ;
  // newstudent: Observable < Student > ;

  constructor(private http: HttpClient , private Http:Http) {
  }

  getUser():Observable<User[]>{
      return this.http.get<User[]>(this._usrurl);
  }

  // saveStudent(data:Student){
  //   debugger
  //     this.http.post(this._stdpost,JSON.stringify(data));
  // }

  saveStudent(data : Student){
    debugger
    var body = JSON.stringify(data);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.Http.post('http://localhost:50001/api/students',body,requestOptions).map(x => x.json());
  }
 
  getStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this._url);
  }
  updateStudent(id,std){
    var body = JSON.stringify(std);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.Http.put('http://localhost:50001/api/students' + id,
      body,requestOptions).map(res => res.json());
  }

  deleteStudent(id: number) {
    return this.Http.delete('http://localhost:50001/api/students' + id).map(res => res.json());
  }



}
export class User{
id : number;
name : string;
email : string;
password: string;
}
