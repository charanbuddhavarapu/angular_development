import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEmployeeCRUDComponent } from './assign-employee-crud.component';

describe('AssignEmployeeCRUDComponent', () => {
  let component: AssignEmployeeCRUDComponent;
  let fixture: ComponentFixture<AssignEmployeeCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignEmployeeCRUDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignEmployeeCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
