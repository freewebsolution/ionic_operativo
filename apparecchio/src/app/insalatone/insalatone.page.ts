import { Component, OnInit } from '@angular/core';
import { InsalatoneService } from '../core/services/insalatone.service';
import { Piatto } from '../models/piatto';

@Component({
  selector: 'app-insalatone',
  templateUrl: './insalatone.page.html',
  styleUrls: ['./insalatone.page.scss'],
})
export class InsalatonePage implements OnInit {
  insalate: Piatto[];
  piattierrMsg: string;
  constructor(private insalataService: InsalatoneService) { }

  ngOnInit(): void {
    this.insalataService.getInsalatone().subscribe(
      insalate => this.insalate = insalate,
      errMsg => this.piattierrMsg = errMsg

    );
  }

}
