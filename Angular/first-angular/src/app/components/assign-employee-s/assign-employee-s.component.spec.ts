import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEmployeeSComponent } from './assign-employee-s.component';

describe('AssignEmployeeSComponent', () => {
  let component: AssignEmployeeSComponent;
  let fixture: ComponentFixture<AssignEmployeeSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignEmployeeSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignEmployeeSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
