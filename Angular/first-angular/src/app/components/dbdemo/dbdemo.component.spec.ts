import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBdemoComponent } from './dbdemo.component';

describe('DBdemoComponent', () => {
  let component: DBdemoComponent;
  let fixture: ComponentFixture<DBdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DBdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DBdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
