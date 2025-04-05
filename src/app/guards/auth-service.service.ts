import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  
  // ✅ Check if user is logged in (by checking token in localStorage)
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken'); // Returns true if token exists
  }

  // ✅ Login: Store token in localStorage
  login(token: string) {
    localStorage.setItem('authToken', token);
  }
   getToken() {
    return localStorage.getItem('authToken');
    
  }
  // getToken(): string | null {
  //   return JSON.parse(localStorage.getItem('authToken')!);
    
  // }
  // ✅ Logout: Remove token from localStorage
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('roleName');
    localStorage.removeItem('userName');
  }
}
