import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from 'src/app/authentication/login/login.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/Admin/admin-dashboard/admin-dashboard.component';
import { AddProductsComponent } from './components/Admin/add-products/add-products.component';
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // { path: '', pathMatch: 'full', redirectTo:'dashboard' },
  { path: "login", component: LoginComponent },
  // {path:'login',component:LoginComponent},
  // { path: '', component: LoginComponent },
  { path: 'dashboard', component: HomeComponent, canActivate: [authGuard],
     //data: { roles: ["User"] }, 
    } ,// ✅ Protected Route
   
  {
    path: 'admindashboard',
    component: AdminDashboardComponent,
    canActivate: [authGuard],
   // data: { roles: ["Admin"] },
  },
  {
    path: 'addproducts',
    component: AddProductsComponent,
  },
];
// const routes: Routes = [
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
