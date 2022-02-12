import { Component } from '@angular/core';
import { Piatto } from '../models/piatto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private piatti: Piatto[];
  constructor() { }

}
