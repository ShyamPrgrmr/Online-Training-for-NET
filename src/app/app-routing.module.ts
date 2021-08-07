import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { HomeComponent } from './components/home/home.component';
import { LearningComponent } from './components/learning/learning.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {component:HomeComponent,path:"home"},
  {component:LearningComponent,path:"learning"},
  {component:RegisterComponent,path:"register"},
  {component:ChangepasswordComponent,path:"changepassword"},
  {component:LoginComponent,path:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
