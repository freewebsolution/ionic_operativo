import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContattiService } from './../core/services/contatti.service';
import { NgForm } from '@angular/forms';
import { Messaggio } from './../models/messaggio';

@Component({
  selector: 'app-scrivimi',
  templateUrl: './scrivimi.page.html',
  styleUrls: ['./scrivimi.page.scss'],
})
export class ScrivimiPage implements OnInit {
  constructor(
    private viewModalController: ModalController,
  ) { }

  ngOnInit() {
  }
  onSubmit(form: any) {
    this.viewModalController.dismiss(form.value);
  }
  onClick() {
    this.viewModalController.dismiss({ nome: 'Lucio' });
  }

}
