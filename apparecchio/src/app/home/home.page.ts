import { Component, Inject, OnInit } from '@angular/core';
import { Piatto } from '../models/piatto';
import { PiattiService } from '../services/piatti.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private piatti: Piatto[];
 private piattierrMsg: string;
  constructor(private piattiService: PiattiService, @Inject('apiUrl') private apiUrl ) { }

  ngOnInit(): void {
    this.piattiService.getPiatti().subscribe(
      piatti => this.piatti = piatti,
      errMsg => this.piattierrMsg = errMsg
    );
  }

}
