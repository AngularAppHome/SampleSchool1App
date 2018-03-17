import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SchoolbusComponent } from './schoolbus/schoolbus.component';
import { StaffComponent } from './staff/staff.component';
import { AssetComponent } from './asset/asset.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'teacher',      component: TeacherComponent },
  { path: 'schoolbus',      component: SchoolbusComponent },
  { path: 'staff',      component: StaffComponent },
  { path: 'asset',      component: AssetComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    SchoolbusComponent,
    StaffComponent,
    AssetComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
