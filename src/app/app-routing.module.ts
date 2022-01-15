import { Component, NgModule } from '@angular/core'
import { Routes } from '@angular/router' 
import { NativeScriptRouterModule } from '@nativescript/angular' 
import { BasicDrawerComponent } from './drawer/drawer.component'
import { HomeComponent } from './home/home.component'

import { ItemDetailComponent } from './item/item-detail.component'

import { LoginComponent } from './login/login.component' 
import { TasksComponent } from './tasks/tasks.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'start', component : BasicDrawerComponent,
    children:[
      {path:'home', component: HomeComponent},
      {path:'tasks', component: HomeComponent}
    ]},  
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
