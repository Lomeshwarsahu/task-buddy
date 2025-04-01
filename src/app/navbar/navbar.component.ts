import { Component } from '@angular/core';
import { AuthServiceService } from '../guards/auth-service.service';
import { Router } from '@angular/router';
import { NgFor, CommonModule, NgStyle } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true, // ✅ Make it a standalone component
    imports: [NgFor,CommonModule, NgStyle,],
    // 
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isDarkMode = false;
  userName:any;
  constructor(public authService: AuthServiceService, private router: Router) {}
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('bg-dark', this.isDarkMode);
    document.body.classList.toggle('text-light', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  ngOnInit() {
    // var User = JSON.parse(localStorage.getItem('currentUser') || '{}')
    this.userName = localStorage.getItem('userName');
    // var User=res.user;
    // {"user":{"userName
    // console.log(userName);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      document.body.classList.toggle('bg-dark', this.isDarkMode);
      document.body.classList.toggle('text-light', this.isDarkMode);
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}