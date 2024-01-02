import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentquizComponent } from './assignmentquiz.component';

describe('AssignmentquizComponent', () => {
  let component: AssignmentquizComponent;
  let fixture: ComponentFixture<AssignmentquizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentquizComponent]
    });
    fixture = TestBed.createComponent(AssignmentquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
