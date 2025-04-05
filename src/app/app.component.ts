import { Component } from '@angular/core';
import { AuthServiceService } from './guards/auth-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
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
