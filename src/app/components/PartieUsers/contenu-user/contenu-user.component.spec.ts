import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuUserComponent } from './contenu-user.component';

describe('ContenuUserComponent', () => {
  let component: ContenuUserComponent;
  let fixture: ComponentFixture<ContenuUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenuUserComponent]
    });
    fixture = TestBed.createComponent(ContenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
