import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component' 
import { NativeScriptMaterialBottomNavigationBarModule} from "@nativescript-community/ui-material-bottomnavigationbar/angular";
import { NativeScriptMaterialTextFieldModule } from "@nativescript-community/ui-material-textfield/angular";
import { NativeScriptMaterialButtonModule } from "@nativescript-community/ui-material-button/angular";
import { ReactiveFormsModule } from '@angular/forms'; 
import { NativeScriptMaterialBottomNavigationModule } from "@nativescript-community/ui-material-bottom-navigation/angular";
import { BasicDrawerComponent } from './drawer/drawer.component';
import { DrawerModule } from '@nativescript-community/ui-drawer/angular';
import { TasksComponent } from './tasks/tasks.component';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, 
            AppRoutingModule, 
            NativeScriptMaterialBottomNavigationBarModule, 
            NativeScriptMaterialTextFieldModule, 
            NativeScriptMaterialButtonModule,
            ReactiveFormsModule,
            NativeScriptFormsModule,
            NativeScriptMaterialBottomNavigationModule,
            DrawerModule,
            NativeScriptUISideDrawerModule
          ],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, LoginComponent, HomeComponent, BasicDrawerComponent, TasksComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
