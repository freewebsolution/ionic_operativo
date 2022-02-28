import { Component, Inject, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { SociService } from '../core/services/soci.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.page.html',
  styleUrls: ['./contatto.page.scss'],
})
export class ContattoPage implements OnInit {

  soci: Team[];
  socierrMsg: string;
  constructor(private sociService: SociService, @Inject('apiUrl') private apiUrl) { }

  ngOnInit(): void {
    this.sociService.getSoci().subscribe(
      soci => this.soci = soci,
      errMsg => this.socierrMsg = errMsg
    );
  }

}
