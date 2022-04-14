import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenTodoComponent } from './template-driven-todo.component';

describe('TemplateDrivenTodoComponent', () => {
  let component: TemplateDrivenTodoComponent;
  let fixture: ComponentFixture<TemplateDrivenTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
