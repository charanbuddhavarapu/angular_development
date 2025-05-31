import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignHTTPComponent } from './assign-http.component';

describe('AssignHTTPComponent', () => {
  let component: AssignHTTPComponent;
  let fixture: ComponentFixture<AssignHTTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignHTTPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignHTTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
