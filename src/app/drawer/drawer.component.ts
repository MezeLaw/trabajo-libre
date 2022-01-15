import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';
import { Drawer } from "@nativescript-community/ui-drawer";
import { LoadEventData, Page } from "@nativescript/core";
import { isAndroid, isIOS } from "@nativescript/core";
import { Router } from "@angular/router";
import { DrawerService } from "./drawer.service";

@Component({
    selector: 'ns-drawer',
    templateUrl: './drawer.component.html',
    styleUrls: ["./drawer.component.css"],
})
export class BasicDrawerComponent implements OnInit {
    drawer: Drawer;

    @ViewChild("drawer", { static: true }) drawerElementRef: ElementRef;
    isOpened : Boolean
    constructor(private router: Router, private routerEx: RouterExtensions, public drawerService: DrawerService, private page : Page) {
        this.page.actionBarHidden = true;
        this.isOpened = false;
    }

    isIOS(): boolean {
        return isIOS;
    }

    isAndroid(): boolean {
        return isAndroid;
    }

    goBack(): void {
        this.routerEx.back();
    }

    ngOnInit(): void {
        this.routerEx.navigateByUrl('/start/(drawer:home)');
    }

    onDrawerLoaded(event: LoadEventData) {
        this.drawerService.drawer = event.object as Drawer;
    }

    goHome(){
        this.routerEx.navigateByUrl('/start/(drawer:home)');
        this.drawerService.onCloseDrawer();
    }

    goTasks(){
        this.routerEx.navigateByUrl('/start/(drawer:tasks)');
        this.drawerService.onCloseDrawer();
    }
}

