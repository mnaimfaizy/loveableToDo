import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";
import { User } from "./auth.model";

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User | null | undefined;

  constructor(private router: Router) {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authChange.next(true);
    this.router.navigate(['/']);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authChange.next(true);
    this.router.navigate(['/']);

  }

  logout() {
    this.user = {};
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  isAuth(): boolean {
    return this.user != null;
  }

  getUser(): User {
    return { ...this.user };
  }
}
