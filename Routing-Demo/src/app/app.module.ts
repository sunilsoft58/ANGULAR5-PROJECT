import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, CommonRouting } from './app-routing.module';

import { AppComponent } from './app.component';
//import { SignInComponent } from './sign-in/sign-in.component';
//import { DashBoardComponent } from './dash-board/dash-board.component';
//import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
  // SignInComponent,
    //DashBoardComponent,
    //NotFoundComponent
    CommonRouting
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
