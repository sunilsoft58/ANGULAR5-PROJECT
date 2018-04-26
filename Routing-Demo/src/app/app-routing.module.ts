import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',component:SignInComponent},
  {path:'',component:DashBoardComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const CommonRouting = [DashBoardComponent, NotFoundComponent]
