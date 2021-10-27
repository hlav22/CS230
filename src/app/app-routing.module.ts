import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { ContentComponent } from './Content/content.component';
import { CoursesComponent } from './Courses/courses.component';
import { TopBarComponent } from './Headers/topbar.component';
import { SubNavComponent } from './SubNav/subnav.component';


const routes: Routes = [
  { path: 'topbar', component: TopBarComponent },
  { path: 'subnav', component: SubNavComponent },
  { path: 'content', component: ContentComponent },
  { path: 'courses', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


