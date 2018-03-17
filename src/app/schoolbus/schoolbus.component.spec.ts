import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolbusComponent } from './schoolbus.component';

describe('SchoolbusComponent', () => {
  let component: SchoolbusComponent;
  let fixture: ComponentFixture<SchoolbusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolbusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
