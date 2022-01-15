import { Injectable } from '@angular/core';
import { Drawer } from '@nativescript-community/ui-drawer';

@Injectable({providedIn: 'root'})
export class DrawerService {
  drawer: Drawer;

  onOpenDrawer() {
    console.log('??');
    if (!this.drawer.isOpened()) {
        this.drawer.open()
    } else {
        this.drawer.close()
    }
  }

  onCloseDrawer() {
      this.drawer.close();
  }
}
