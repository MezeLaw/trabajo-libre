import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';
import { Drawer } from "@nativescript-community/ui-drawer";
import { Page } from "@nativescript/core";
import { isAndroid, isIOS } from "@nativescript/core";
import { Router } from "@angular/router";

@Component({
    selector: 'ns-drawer',
    templateUrl: './drawer.component.html',
    styleUrls: ["./drawer.component.css"],
})
export class BasicDrawerComponent implements OnInit {
    drawer: Drawer;
    
    @ViewChild("drawer", { static: true }) drawerElementRef: ElementRef;
    isOpened : Boolean
    constructor(private router: Router, private routerEx: RouterExtensions, private page : Page) {
        this.page.actionBarHidden = false
        this.isOpened = false 
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
        this.drawer = this.drawerElementRef.nativeElement;
    }

    onOpenDrawer() { 
        
        if (!this.isOpened) {
            this.drawer.open()
            this.isOpened = true
        } else {
            this.drawer.close()
            this.isOpened = false
        }
    }

    onCloseDrawer() {
        this.drawer.close();
    }

    goHome(){
        this.router.navigate(['home'])
    }

    goTasks(){
        this.router.navigate(['tasks'])
    }
}

