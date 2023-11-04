import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaddComponent } from './formadd.component';

describe('FormaddComponent', () => {
  let component: FormaddComponent;
  let fixture: ComponentFixture<FormaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormaddComponent]
    });
    fixture = TestBed.createComponent(FormaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
