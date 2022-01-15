import { Component, OnInit } from "@angular/core"
import { RouterExtensions } from "@nativescript/angular"
import { isAndroid, isIOS, Page, ScrollEventData, ScrollView } from "@nativescript/core"
import { DrawerService } from "../drawer/drawer.service"

@Component({
    selector: 'ns-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.ios.css','./tasks.component.android.css' ],
  })
  export class TasksComponent {
    constructor(private routerEx : RouterExtensions, public _drawer: DrawerService) {
        console.log("Entre al constructor de tasks component")
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

    goHome(){
        this.routerEx.navigateByUrl('/start/(drawer:home)');
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

