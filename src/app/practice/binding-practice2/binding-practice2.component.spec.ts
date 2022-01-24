import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingPractice2Component } from './binding-practice2.component';

describe('BindingPractice2Component', () => {
  let component: BindingPractice2Component;
  let fixture: ComponentFixture<BindingPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingPractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
