import { Component, OnInit } from '@angular/core';
import { StaffdataService } from 'app/staff/staffdata.service';

import {NgForm} from '@angular/forms'
import {FormsModule} from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import { Staff } from 'shared/staff.model';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
  providers:[StaffdataService]
})
export class StaffComponent implements OnInit {
 
  
  staffList : Staff[];
  constructor(private staffService: StaffdataService) { }

  ngOnInit() {
      this.staffService.getStaff().subscribe(data=>this.staffList = data);
  }
  
}
