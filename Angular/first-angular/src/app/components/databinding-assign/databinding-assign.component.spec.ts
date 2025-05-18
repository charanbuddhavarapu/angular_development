import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingAssignComponent } from './databinding-assign.component';

describe('DatabindingAssignComponent', () => {
  let component: DatabindingAssignComponent;
  let fixture: ComponentFixture<DatabindingAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingAssignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
