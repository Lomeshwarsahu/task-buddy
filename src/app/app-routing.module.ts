import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from 'src/app/authentication/login/login.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch: 'full'},
  // {path:'login',component:LoginComponent},
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: HomeComponent, canActivate: [authGuard] } // ✅ Protected Route
];
// const routes: Routes = [
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
