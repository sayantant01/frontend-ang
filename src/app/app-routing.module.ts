import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { AddresourceComponent } from './addresource/addresource.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'addresource', component: AddresourceComponent },
  { path: 'viewallproject', component: ProjectsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }