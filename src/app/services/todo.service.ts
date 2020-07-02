import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  lastId = 0;
  private todos: Todo[] = [];
  private todos$ = new Subject<Todo[]>();

  constructor() {}

  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    this.todos$.next(this.todos);

    return this;
  }

  deleteTodo(id: number): TodoService {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.todos$.next(this.todos);

    return this;
  }

  getAllTodos(): Observable<Todo[]> {
    return this.todos$.asObservable();
  }
}
