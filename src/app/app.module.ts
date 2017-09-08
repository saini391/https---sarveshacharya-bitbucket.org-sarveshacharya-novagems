import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './superadmin/login/login.component';
import { SignupComponent } from './superadmin/signup/signup.component';

//services
import { ApiService } from './services/api.service';
import { SearchcompanyComponent } from './superadmin/searchcompany/searchcompany.component';
import { HomeComponent } from './superadmin/home/home.component';
import { AddcompanyComponent } from './superadmin/addcompany/addcompany.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SearchcompanyComponent,
    HomeComponent,
    AddcompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { 
        path: '', 
        redirectTo: '\login', 
        pathMatch: 'full' 
      },
      {
        path :'\login',
        component : LoginComponent
      },
      {
        path :'\signup',
        component : SignupComponent
      },
      {
        path :'\home',
        component : HomeComponent
      },
      {
        path :'\addcompany',
        component : AddcompanyComponent
      },
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
