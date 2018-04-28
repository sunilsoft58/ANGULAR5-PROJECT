import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  { path: '', redirectTo:'/departments',pathMatch:'full'},
  { path:'departments',component:DepartmentListComponent},
  { path: 'departments/:id', component:DepartmentDetailComponent },
  { path:'employees', component:EmployeeListComponent },
  { path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,EmployeeListComponent,
  SignInComponent, DashBoardComponent, NotFoundComponent, DepartmentDetailComponent]
