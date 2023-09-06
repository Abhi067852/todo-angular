import { Injectable } from '@angular/core';
import { of, single } from 'rxjs';
import { Todo } from '../model/Todo';
//any modification in the data can be done through services
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  todos:Todo[];

  constructor() {
    this.todos=[
      {
        id:'111',
        title:"Learn cpp",
        isCompleted:true,
        date:new Date()
      },
      {
        id:'223',
        title:"Learn React",
        isCompleted:false,
        date:new Date()
      }
    ]
   }
   getTodos()
   {
    return of(this.todos);

   }
   addTodo(todo:Todo)
   {
    this.todos.push(todo);
   }
   changeStatus(todo:Todo)
   {
    this.todos.map(singleTodo=>
      {
        if(singleTodo.id==todo.id)
        {
          singleTodo.isCompleted=!singleTodo.isCompleted;
        }
      })
   }
   deleteTodos(todo:Todo)
   {
    const indexofTodo=this.todos.findIndex(
      (currentObj)=>currentObj.id===todo.id
    );
    this.todos.splice(indexofTodo,1);
   }
}
