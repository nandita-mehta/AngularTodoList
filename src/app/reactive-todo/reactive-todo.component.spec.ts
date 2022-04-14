import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTodoComponent } from './reactive-todo.component';

describe('ReactiveTodoComponent', () => {
  let component: ReactiveTodoComponent;
  let fixture: ComponentFixture<ReactiveTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
