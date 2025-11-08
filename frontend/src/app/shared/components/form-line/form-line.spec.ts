import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLine } from './form-line';

describe('FormLine', () => {
  let component: FormLine;
  let fixture: ComponentFixture<FormLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
