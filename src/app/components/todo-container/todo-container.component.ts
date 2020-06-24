import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { TodoService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
})
export class TodoContainerComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.onGetTodos();
  }

  onGetTodos() {
    const data = this.service.getAllTodos();
    this.todos = data;
  }

  onDeleteTodo(id: number) {
    this.service.deleteTodo(id);
  }
}
