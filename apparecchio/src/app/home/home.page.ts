import { Component, OnInit } from '@angular/core';
import { Piatto } from '../models/piatto';
import { PiattiService } from '../core/services/piatti.service';
import { InsalatoneService } from '../core/services/insalatone.service';
import { LoadingController, ToastController } from '@ionic/angular';


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
    private loading: LoadingController,
    private toast: ToastController
  ) { }

  ngOnInit(): void {
    this.piattiService.getPizzaInEvidenza().subscribe(
      piatti => this.piatti = piatti,
      errMsg => this.piattierrMsg = errMsg
    );
    this.insalateService.getInsalatone().subscribe(
      insalate => this.insalate = insalate,
      errMsg => {
        this.piattierrMsg = errMsg;
        this.showToast('Errore di rete: ' + errMsg);
      }
    );
  }
  // async showLoading() {
  //   const load = await this.loading.create({
  //     message: 'Caricamento in corso',
  //     duration: 2000
  //   });
  //   await load.present();
  // }

    async showToast(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      cssClass:'miostato',
      // buttons: [
      //   {
      //     side:'start',
      //     icon: 'heart',
      //     text:'Favorite',
      //     handler: ()=>{
      //       console.log('Hai cliccato sul pulsante del toast');
      //     }
      //   }
      // ]
    });
    await toast.present();
  }

}
