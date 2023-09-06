import { Component,OnInit} from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import {v4 as uuid} from 'uuid'
import {TodoserviceService} from "src/app/services/todoservice.service"
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit{
  constructor(private todoService:TodoserviceService)
  {}
  todoTitle:string='';
  ngOnInit(): void {
      
  }
  handleAdd()
  {
    const newTodo:Todo={
        id:uuid(),
        title:this.todoTitle,
        isCompleted:false,
        date:new Date
    }
    this.todoService.addTodo(newTodo);
    this.todoTitle="";
  }

}
