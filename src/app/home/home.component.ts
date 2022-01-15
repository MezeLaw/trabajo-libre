import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { isAndroid, isIOS, Page, ScrollEventData, ScrollView } from "@nativescript/core"
import { DrawerService } from "../drawer/drawer.service";

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.ios.css','./home.component.android.css' ],
  })
  export class HomeComponent {
    constructor(private router: Router, public _drawer: DrawerService) {
        console.log("Entre al constructor de home component")
    }

    isIOS(): boolean {
      return isIOS;
    }

    isAndroid(): boolean {
        return isAndroid;
    }

    onScroll(args: ScrollEventData) {
        const scrollView = args.object as ScrollView
    }

    onBottomNavigationTabSelected($event){

    }

    onBottomNavigationTabPressed($event){}


    goTasks(){
        this.router.navigateByUrl('/start/(drawer:tasks)');
    }
  }
  /**
   *
   *
   *        import { Component, OnInit } from "@angular/core"

            @Component({
                selector: 'ns-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.ios.css','./home.component.android.css' ],
            })
            export class HomeComponent {}
   *
   *
   */

