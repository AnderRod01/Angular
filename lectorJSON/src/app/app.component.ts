import { Component } from '@angular/core';

import frutas from 'src/assets/json/sample1.json';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lectorJSON';


  Frutas: any = frutas;
}
