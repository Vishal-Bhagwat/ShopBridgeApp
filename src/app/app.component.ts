import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<router-outlet> </router-outlet> ',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ShopBridge';
  isMenuOpen: boolean;
  public showContainer: boolean;
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        console.log(state.matches);
        if (state.matches) {
          this.isMenuOpen = false;
        } else {
          this.isMenuOpen = true;
        }
        this.collpaseSideBar();
      });
  }

  collpaseSideBar(){
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen){
      document.getElementById("menu1").style.width = "60px";   
      document.getElementById("sideMenu1").style.margin = "0px 0px 0px 60px";
    }else{
      document.getElementById("menu1").style.width = "280px";   
      document.getElementById("sideMenu1").style.margin = "0px 0px 0px 280px";
    }
  }

}
