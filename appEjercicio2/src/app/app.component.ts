import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'appEjercicio2';

  guardar (form:NgForm){
    if(form.invalid){
      console.log('Formulario no valido')
      return
    }
  }
}
