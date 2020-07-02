import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  query = '';

  constructor(private service: TodoService) {}

  ngOnInit(): void {}

  addTodo() {
    this.service.addTodo({
      task: this.query,
      complete: false,
      id: 0,
    });
    this.query = '';
  }
}
