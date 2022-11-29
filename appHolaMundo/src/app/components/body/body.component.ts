import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  mostrar = true;

  frase: any  = {
    mensaje: 'Un gran poder conlleva un agran responsabilidad',
    autor: 'Ben Parker'
  };

  personajes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Daredevil'];
}
