import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appCalculadora';
  form: FormGroup;   


  constructor(private fb: FormBuilder)
  {
    this.form = this.fb.group({
      num1: ['',Validators.required],
      num2: ['',Validators.required],
      op: ['',Validators.required]
    });

  }

  resultado:any = null

  mostrarResultado(): void{
    if(this.form.value.op == 1){
      this.resultado =this.form.value.num1 + this.form.value.num2;
    }else{
      if(this.form.value.op == 2){
        this.resultado =this.form.value.num1 - this.form.value.num2;
      }else{
        if (this.form.value.op == 3){
          this.resultado =this.form.value.num1 * this.form.value.num2;
        }else{
          if(this.form.value.op == 4){

            if(this.form.value.num2 == 0){
              this.resultado = "Error de División por cero"
            }else{
              this.resultado = (this.form.value.num1 / this.form.value.num2).toFixed(2);
            }
          }
        }
      }
    }
    
  }

}
