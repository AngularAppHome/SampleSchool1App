import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { ROOT_URL } from 'shared/Config';
import { Staff } from 'shared/staff.model';


@Injectable()
export class StaffdataService {
  private _url: string = "assets/stubby/staff.json";

  staffs: Observable < Staff[] > ;
  newstaff: Observable < Staff > ;

  constructor(private http: HttpClient) {
  }
 
    getStaff(): Observable<Staff[]>{
     return this.http.get<Staff[]>(this._url);
    }

}
