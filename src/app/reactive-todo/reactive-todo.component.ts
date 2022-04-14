import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reactive-todo',
  templateUrl: './reactive-todo.component.html',
  styleUrls: ['./reactive-todo.component.css']
})
export class ReactiveTodoComponent implements OnInit {

  formBuilder: FormBuilder;
  formdata: FormGroup;
  edit: boolean = false;
  index: number;
  list:String[] = [];
  constructor() { }

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      newTask: ['']
    })
  }

  addTask() {
    console.log(this.formdata.value);
    console.log(this.list.push(this.formdata.value))
    // this.list.indexOf(this.formdata.value) === -1? this.list.push(task): console.log("Task already exists");
    console.log(this.list);   
  }
  deleteTask(task:String) {
    this.list = this.list.filter(item => item !== task);
  }
  
}