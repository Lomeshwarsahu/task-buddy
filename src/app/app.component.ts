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
  title = 'B-Town';
  constructor(public authService: AuthServiceService, private router: Router) {}

  // logout() {
  //   this.authService.logout();
  //   this.router.navigate(['/']);
  // }
}
