import { Component,OnInit } from '@angular/core';
import { Piatto } from '../models/piatto';
import { PiattiService } from '../core/services/piatti.service';
import { InsalatoneService } from '../core/services/insalatone.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private piatti: Piatto[];
  private insalate: Piatto[];
  private piattierrMsg: string;
  constructor(
    private piattiService: PiattiService,
    private insalateService: InsalatoneService
     ) { }

  ngOnInit(): void {
    this.piattiService.getPizzaInEvidenza().subscribe(
      piatti => this.piatti = piatti,
      errMsg => this.piattierrMsg = errMsg
    );
    this.insalateService.getInsalatone().subscribe(
      insalate => this.insalate = insalate,
      errMsg => this.piattierrMsg = errMsg
    );
  }

}
