import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeQuizComponent } from './liste-quiz.component';

describe('ListeQuizComponent', () => {
  let component: ListeQuizComponent;
  let fixture: ComponentFixture<ListeQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeQuizComponent]
    });
    fixture = TestBed.createComponent(ListeQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
