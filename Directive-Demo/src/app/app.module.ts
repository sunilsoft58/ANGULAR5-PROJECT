import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgIfDirevtiveComponent } from './structural-directive/ng-if-direvtive/ng-if-direvtive.component';
import { NgSwicthDirevtiveComponent } from './structural-Directive/ng-swicth-direvtive/ng-swicth-direvtive.component';
import { NgForDirevtiveComponent } from './structural-Directive/ng-for-direvtive/ng-for-direvtive.component';
import { NgStyleDirevtiveComponent } from './attribute-directives/ng-style-direvtive/ng-style-direvtive.component';
import { NgClassDirevtiveComponent } from './Attribute-Directives/ng-class-direvtive/ng-class-direvtive.component';


@NgModule({
  declarations: [
    AppComponent,
    NgIfDirevtiveComponent,
    NgSwicthDirevtiveComponent,
    NgForDirevtiveComponent,
    NgStyleDirevtiveComponent,
    NgClassDirevtiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
