import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Page, ScrollEventData, ScrollView } from "@nativescript/core"

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.ios.css','./home.component.android.css' ],
  })
  export class HomeComponent {
    constructor(private router : Router) { 
        console.log("Entre al constructor de home component")
    }

    onScroll(args: ScrollEventData) {
        const scrollView = args.object as ScrollView 
    }

    onBottomNavigationTabSelected($event){

    }

    onBottomNavigationTabPressed($event){}
      

    goTasks(){
        this.router.navigate(['tasks'])
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
            
  