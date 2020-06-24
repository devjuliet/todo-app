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

  deleteTodo(id: number): TodoService {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log(this.todos);
    return this;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }
}
