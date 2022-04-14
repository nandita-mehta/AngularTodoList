import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-todo',
  templateUrl: './template-driven-todo.component.html',
  styleUrls: ['./template-driven-todo.component.css']
})
export class TemplateDrivenTodoComponent implements OnInit {

  newTask:String ='';
  edit: boolean = false;
  index: number;
  list:String[] = [];
  constructor() { }

  ngOnInit() {
  }

  upsertTask(task:String) {
    if(this.edit == true) {
      this.list[this.index] = task;
      this.edit=false;
    }
    else {
      this.list.indexOf(task) === -1? this.list.push(task): console.log("Task already exists");
    }
    
  }
  deleteTask(task:String) {
    this.list = this.list.filter(item => item !== task);
  }
  editTask(task:String) {
    this.index = this.list.indexOf(task);
    this.newTask = task;
    this.edit = true;
  }
}
