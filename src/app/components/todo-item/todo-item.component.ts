import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/classes/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() onDelete = new EventEmitter<number>();
  complete = false;

  constructor() {}

  ngOnInit(): void {}

  onDeleteTodo() {
    this.onDelete.emit(this.todo.id);
  }
}
