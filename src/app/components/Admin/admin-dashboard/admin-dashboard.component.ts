import { Component } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';

@Component({
  selector: 'app-admin-dashboard',
   standalone: true,
    imports: [NavbarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
