import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
})
export class TodoAppComponent implements OnInit {
  title = 'Tasks';

  currentUser: User;

  constructor(private authenticationService: AuthenticationService) {
    this.currentUser = this.authenticationService.currentUserValue;
  }
  ngOnInit() {}
}
