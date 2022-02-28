import { Component, OnInit } from '@angular/core';
import { Piatto } from '../models/piatto';
import { PiattiService } from '../core/services/piatti.service';
import { InsalatoneService } from '../core/services/insalatone.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  piatti: Piatto[];
  insalate: Piatto[];
  piattierrMsg: string;
  constructor(
    private piattiService: PiattiService,
    private insalateService: InsalatoneService,
    private loading: LoadingController
  ) { }

  ngOnInit(): void {
    //this.showLoading();
    this.piattiService.getPizzaInEvidenza().subscribe(
      piatti => this.piatti = piatti,
      errMsg => this.piattierrMsg = errMsg
    );
    this.insalateService.getInsalatone().subscribe(
      insalate => this.insalate = insalate,
      errMsg => this.piattierrMsg = errMsg
    );
  }
  // async showLoading() {
  //   const load = await this.loading.create({
  //     message: 'Caricamento in corso',
  //     duration: 2000
  //   });
  //   await load.present();
  // }

}
