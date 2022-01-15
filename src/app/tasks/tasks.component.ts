import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Page, ScrollEventData, ScrollView } from "@nativescript/core"

@Component({
    selector: 'ns-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.ios.css','./tasks.component.android.css' ],
  })
  export class TasksComponent {
    constructor(private router : Router) { 
        console.log("Entre al constructor de tasks component")
    }

    onScroll(args: ScrollEventData) {
        const scrollView = args.object as ScrollView 
    }

    onBottomNavigationTabSelected($event){

    }

    onBottomNavigationTabPressed($event){}
      
    goHome(){
        this.router.navigate(['home'])
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
            
  