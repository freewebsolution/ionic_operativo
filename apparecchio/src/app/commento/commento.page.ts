import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-commento',
  templateUrl: './commento.page.html',
  styleUrls: ['./commento.page.scss'],
})
export class CommentoPage implements OnInit {
@Input()titolo: string;
  constructor(private viewModalController: ModalController) { }

  ngOnInit() {
  }
  onClick() {
    this.viewModalController.dismiss({nome: 'Lucio'});
  }
  onSubmit(form: any) {
    this.viewModalController.dismiss(form.value);
  }

}
