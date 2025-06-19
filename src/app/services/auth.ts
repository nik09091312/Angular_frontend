import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  registerComponent: any;
  loginComponent: any;
  register(username: any, email: any, password: any) {
    throw new Error('Method not implemented.');
  }
  login(email: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
