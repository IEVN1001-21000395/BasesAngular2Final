import { Component } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!:FormGroup;
  resultado:number=0;
  constructor(){}
  ngOnInit(): void {
    this.formulario=new FormGroup({
    numero1: new FormControl('', Validators.required),
    numero2: new FormControl('', Validators.required),
    numero3: new FormControl('', Validators.required),
    numero4: new FormControl('', Validators.required),
    });

  }
  distanciaNumeros():void{
    const numero1 = this.formulario.get('numero1')?.value;
    const numero2 = this.formulario.get('numero2')?.value;
    const numero3 = this.formulario.get('numero3')?.value;
    const numero4 = this.formulario.get('numero4')?.value;
    this.resultado =  Math.round(Math.sqrt(Math.pow(numero1+numero3, 2)+ Math.pow(numero2+numero4, 2)));

  }
}
