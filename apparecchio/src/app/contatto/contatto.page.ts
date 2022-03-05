import { Component, Inject, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { SociService } from '../core/services/soci.service';
import { ModalController } from '@ionic/angular';
import { ScrivimiPage } from '../scrivimi/scrivimi.page';
import { ContattiService } from './../core/services/contatti.service';
import { Messaggio } from '../models/messaggio';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.page.html',
  styleUrls: ['./contatto.page.scss'],
})
export class ContattoPage implements OnInit {

  soci: Team[];
  errMsg: string;
  success: string;
  messaggio: Messaggio;
  messaggiorrMsg: string;
  constructor(
    private sociService: SociService,
    private contattiService: ContattiService,
    private modalController: ModalController,
    private toastController: ToastController,
    @Inject('apiUrl') private apiUrl) { }

  ngOnInit(): void {
    this.sociService.getSoci().subscribe(
      soci => this.soci = soci,
      errMsg => this.errMsg = errMsg
    );
  }
  async scrivimi() {
    const modal = await this.modalController.create({
      component: ScrivimiPage,
      componentProps: {}
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('Dati passati in chiusura ' + JSON.stringify(data));
    this.postMessaggio(data);
  }
  postMessaggio(data: Messaggio) {
    this.contattiService.postMessaggio(data)
      .subscribe(
        dati => {
          this.messaggio = dati;
          this.successToast('Messaggio inviato con successo');
        },
        errMsg => {
          this.messaggiorrMsg = errMsg;
          this.errorToast('Errore di rete: ' + errMsg);
        }
      );

    // }

  }
  async errorToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'toastError',
    });
    toast.present();
  }

  async successToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'toastSuccess',
    });
    toast.present();
  }
}
