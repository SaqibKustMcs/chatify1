import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent,
   
  },
  {
    path:'navbar', component: NavbarComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'navbar/home', component: HomeComponent
      },
      {
        path: 'navbar/form', component: FormComponent,
      },
    
      // {path:'form', component: FormComponent},
      // {path:'formreactive', component: FormReactiveComponent}
    ]
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
