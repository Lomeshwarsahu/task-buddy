import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { HTTP_INTERCEPTORS, provideHttpClient,withInterceptors } from '@angular/common/http'; // ✅ Import this
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ✅ Required
import { tokenInterceptor } from './guards/token.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,ToastrModule.forRoot(),BrowserAnimationsModule
  ],
  providers: [
    // provideHttpClient(),
    provideHttpClient(
      withInterceptors([tokenInterceptor])
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
