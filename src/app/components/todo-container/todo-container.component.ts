import { Component, OnInit, OnChanges } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

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
    this.service.getAllTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  removeTodo(id: number) {
    this.service.deleteTodo(id);
  }
}
