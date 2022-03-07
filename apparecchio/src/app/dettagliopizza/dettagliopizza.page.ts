/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { stringify } from 'querystring';
import { CommentoPage } from '../commento/commento.page';
import { PiattiService } from '../core/services/piatti.service';
import { Piatto } from '../models/piatto';
import {Commento} from '../models/commento';

@Component({
  selector: 'app-dettagliopizza',
  templateUrl: './dettagliopizza.page.html',
  styleUrls: ['./dettagliopizza.page.scss'],
})
export class DettagliopizzaPage implements OnInit {
  piatto: Piatto;
  piatti: Piatto[]=[];
  commento: Commento[] = [];
  piattierrMsg: string;
  mediavoti: number;
  preferita: boolean = false;
  idpizza: number;
  constructor(
    private piattiService: PiattiService,
    private route: ActivatedRoute,
    private asc: ActionSheetController,
    private modalController: ModalController,
    @Inject('apiUrl') private apiUrl
    ) { }

    async showActionSheet() {
      const actionSheet = await this.asc.create({
        header: 'Seleziona...',
        buttons: [{
          text: 'Invio Commento',
          icon: 'send',
          handler: () => {
            this.showModal();
            console.log('clicked comment');
          }
        }, {
          text: 'Imposta preferito',
          icon: 'heart',
          handler: () => {
            console.log(' clicked preferite');
          }
        }]
      });
      await actionSheet.present();
    }
    async showModal() {
      const modal = await this.modalController.create({
      component: CommentoPage,
      componentProps: { titolo: this.piatto.titolo }
      });

      await modal.present();
      const {data}=await modal.onDidDismiss();
      console.log('Dati passati in chiusura '+JSON.stringify(data));
      this.postCommento(data);

    }
  postCommento(data: Piatto) {
    this.piattiService.postCommento(data, this.idpizza)
      .subscribe(
        res => {
          this.idpizza = this.route.snapshot.params.id;
          console.log('Ciao io sto inviando questi: ',res);
          this.piatto = res;
        }
      );

  }

  ngOnInit(): void {
    this.idpizza = this.route.snapshot.params.id;
    this.piattiService.getPiatto(this.idpizza).subscribe(
      piatto =>{
        this.piatto = piatto;
        if(this.piatto.commenti.length > 0){
          let totale: number  = 0;
          this.piatto.commenti.forEach(el => totale += el.votazione);
          this.mediavoti = +(totale/this.piatto.commenti.length).toFixed(2);
        }
      },
      errMsg => this.piattierrMsg = errMsg
    );
  }

}
