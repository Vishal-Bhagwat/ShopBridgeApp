import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<router-outlet> </router-outlet> ',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ShopBridge';
  isMenuOpen: boolean;

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
