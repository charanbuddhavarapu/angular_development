import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeADDComponent } from './employee-add.component';

describe('EmployeeADDComponent', () => {
  let component: EmployeeADDComponent;
  let fixture: ComponentFixture<EmployeeADDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeADDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeADDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
