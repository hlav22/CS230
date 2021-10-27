import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './Content/content.component';
import { CoursesComponent } from './Courses/courses.component';
import { FooterComponent } from './Footer/footer.component';
import { TopBarComponent } from './Headers/topbar.component';
import { SubNavComponent } from './SubNav/subnav.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './Headers/user-info.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    ContentComponent,
    CoursesComponent,
    SubNavComponent,
    UserInfoComponent
  ],
  exports: [
    TopBarComponent,
    FooterComponent,
    ContentComponent,
    CoursesComponent,
    SubNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
