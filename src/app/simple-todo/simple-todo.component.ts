import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html',
  styleUrls: ['./simple-todo.component.css']
})
export class SimpleTodoComponent implements OnInit {

  list:String[]=[];
  constructor() { }

  ngOnInit() {
  }
  addTask(task:String) {
    this.list.indexOf(task) === -1? this.list.push(task): console.log("Task already exists");
    console.log("added ", this.list);
  }
  deleteTask(task:String) {
    this.list = this.list.filter(item => item !== task);
    console.log("deleted ", this.list);
  }
}