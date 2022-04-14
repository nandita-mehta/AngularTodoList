import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateDrivenTodoComponent } from './template-driven-todo/template-driven-todo.component';
import { SimpleTodoComponent } from './simple-todo/simple-todo.component';
import { ReactiveTodoComponent } from './reactive-todo/reactive-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenTodoComponent,
    SimpleTodoComponent,
    ReactiveTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
