import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceDeleteComponent } from './components/resourcee/resource-delete/resource-delete.component';
import { ResourceFormComponent } from './components/resourcee/resource-form/resource-form.component';
import { ResourceListComponent } from './components/resourcee/resource-list/resource-list.component';

const routes: Routes = [
  { path: '', component: ResourceListComponent },
  { path: 'resources', component: ResourceListComponent },
  { path: 'resource/insert', component: ResourceFormComponent },
  { path: 'resource/:id/update', component: ResourceFormComponent },
  { path: 'resource/:id/delete', component: ResourceDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
