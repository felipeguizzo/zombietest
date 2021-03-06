import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourceFormComponent } from './components/resourcee/resource-form/resource-form.component';
import { ResourceListComponent } from './components/resourcee/resource-list/resource-list.component';
import { ResourceDeleteComponent } from './components/resourcee/resource-delete/resource-delete.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovementListComponent } from './components/movements/movement-list/movement-list.component';
import { MovementFormComponent } from './components/movements/movement-form/movement-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceFormComponent,
    ResourceListComponent,
    ResourceDeleteComponent,
    MovementListComponent,
    MovementFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
