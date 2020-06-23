import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  lastId = 0;
  todos: Todo[] = [];

  constructor() {}

  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodo() {}

  editTodo() {}

  getTodo() {}

  getAllTodos(): Todo[] {
    return this.todos;
  }
}
