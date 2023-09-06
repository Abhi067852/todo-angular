import { Component,OnInit } from '@angular/core';
import { TodoserviceService } from 'src/app/services/todoservice.service';
import { Todo } from 'src/app/model/Todo';
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[]=[];
  faTrashAlt=faTrashAlt;

  constructor(private todoService:TodoserviceService)
  {

  }
  ngOnInit(): void {
      this.todoService.getTodos().subscribe(todos=>
        {
          this.todos=todos;
        })
  }
  changeTodoStatus(todo:Todo)
  {
    this.todoService.changeStatus(todo);
  }
  deletetodo(todo:Todo)
  {
    this.todoService.deleteTodos(todo);
  }


}
