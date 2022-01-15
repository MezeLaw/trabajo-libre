import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { Routes } from '@angular/router';

import { DrawerModule } from "@nativescript-community/ui-drawer/angular";
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

import { DrawerService } from './drawer.service';

import { BasicDrawerComponent } from './drawer.component';
import { HomeComponent } from '../home/home.component';
import { TasksComponent } from '../tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: BasicDrawerComponent,
    children: [
      { path: 'home', component: HomeComponent, outlet: 'drawer' },
      { path: 'tasks', component: TasksComponent, outlet: 'drawer' },
    ]
  },
];

@NgModule({
  imports: [
    NativeScriptCommonModule,
    DrawerModule,
    NativeScriptRouterModule.forChild(routes),
  ],
  providers: [DrawerService],
  declarations: [BasicDrawerComponent, HomeComponent, TasksComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class BasicDrawerModule {}
