import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFormComponentComponent } from './common-form-component.component';

describe('CommonFormComponentComponent', () => {
  let component: CommonFormComponentComponent;
  let fixture: ComponentFixture<CommonFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonFormComponentComponent]
    });
    fixture = TestBed.createComponent(CommonFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
