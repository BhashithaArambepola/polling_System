import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashBoardComponent} from "./dash-board/dash-board.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: 'dashBoard',
    component: DashBoardComponent
  },{
  path:'login',
    component: LoginComponent
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
