import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTodo } from './todo-input';


describe('TodoInput', () => {
  let component: InputTodo;
  let fixture: ComponentFixture<InputTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTodo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
