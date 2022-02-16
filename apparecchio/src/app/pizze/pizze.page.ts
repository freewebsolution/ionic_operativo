import { Component, Inject, OnInit } from '@angular/core';
import { Piatto } from '../models/piatto';
import { PiattiService } from '../core/services/piatti.service';
@Component({
  selector: 'app-pizze',
  templateUrl: './pizze.page.html',
  styleUrls: ['./pizze.page.scss'],
})
export class PizzePage implements OnInit {

  piatti: Piatto[];
  piattierrMsg: string;
  constructor(private piattiService: PiattiService, @Inject('apiUrl') private apiUrl) { }

  ngOnInit(): void {
    this.piattiService.getPiatti().subscribe(
      piatti => this.piatti = piatti,
      errMsg => this.piattierrMsg = errMsg
    );
  }

}
