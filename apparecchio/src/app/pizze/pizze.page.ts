import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-pizze',
  templateUrl: './pizze.page.html',
  styleUrls: ['./pizze.page.scss'],
})
export class PizzePage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  onClick(){
this.menu.open('sideMenu');
  }

}
