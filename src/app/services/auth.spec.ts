import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    // Aquí iría la lógica real de autenticación
    // Por ahora simulamos un login exitoso
    if (email && password) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  register(username: string, email: string, password: string): boolean {
    // Aquí iría la lógica real de registro
    // Por ahora simulamos un registro exitoso
    if (username && email && password) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
