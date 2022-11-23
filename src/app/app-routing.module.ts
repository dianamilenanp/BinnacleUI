import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'login',component:LoginComponent},
  {path:'task',component:TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
