import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { LoginComponent } from './login/login.component'
import { NativeScriptMaterialBottomNavigationBarModule} from "@nativescript-community/ui-material-bottomnavigationbar/angular";
import { NativeScriptMaterialTextFieldModule } from "@nativescript-community/ui-material-textfield/angular";
import { NativeScriptMaterialButtonModule } from "@nativescript-community/ui-material-button/angular";
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, 
            AppRoutingModule, 
            NativeScriptMaterialBottomNavigationBarModule, 
            NativeScriptMaterialTextFieldModule, 
            NativeScriptMaterialButtonModule,
            ReactiveFormsModule,
            NativeScriptFormsModule
          ],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, LoginComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
