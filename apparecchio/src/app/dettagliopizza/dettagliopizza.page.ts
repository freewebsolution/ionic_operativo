/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PiattiService } from '../core/services/piatti.service';
import { Piatto } from '../models/piatto';

@Component({
  selector: 'app-dettagliopizza',
  templateUrl: './dettagliopizza.page.html',
  styleUrls: ['./dettagliopizza.page.scss'],
})
export class DettagliopizzaPage implements OnInit {
  piatto: Piatto;
  piattierrMsg: string;
  mediavoti: number;
  preferita: boolean = false;
  idpizza: number;
  constructor(
    private piattiService: PiattiService,
    private route: ActivatedRoute,
    @Inject('apiUrl') private apiUrl
    ) { }

  ngOnInit(): void {
    this.idpizza = this.route.snapshot.params.id;
    this.piattiService.getPiatto(this.idpizza).subscribe(
      piatto => this.piatto = piatto,
      errMsg => this.piattierrMsg = errMsg
    );
  }

}
