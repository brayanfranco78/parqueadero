import {Component} from '@angular/core';
import {Router} from '@angular/router';

export interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  public user: User;
  public error: Array<boolean>;
  public rememberUser: boolean;

  constructor(private router: Router) {
    this.user = {
      username: '',
      password: '',
    };
    this.error = new Array<boolean>(2);
    this.rememberUser = false;
  }

  ngOnInit(): void {
    //Get the old user
    var oldUser: string | null = localStorage.getItem('user');
    if (oldUser) {
      this.user = JSON.parse(oldUser);
      this.rememberUser = true;
    }
  }

  public signIn(): void {
    // Here the call to the api
  }

  public enterEvent(event: any): void {
    this.signIn();
  }
}
