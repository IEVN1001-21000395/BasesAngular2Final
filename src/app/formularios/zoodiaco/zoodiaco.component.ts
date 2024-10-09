import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-zoodiaco',
  templateUrl: './zoodiaco.component.html',
  styleUrls: ['./zoodiaco.component.css']
})
export class ZoodiacoComponent {
  formulario: FormGroup;
  resultado: string = '';
  imagenSigno: string = '';

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellidop: ['', Validators.required],
      apellidom: ['', Validators.required],
      fecha: ['', Validators.required],
      genero: ['', Validators.required]
    });
  }

  // Método para calcular el zodiaco chino
  calcularZodiacoChino(anio: number): { signo: string, imagenUrl: string } {
    const signosChinos = [
      { signo: 'Rata', imagenUrl: 'https://roedoresdomesticos.com/wp-content/uploads/2017/06/rata-featured-roedoresdomesticos.jpg' },
      { signo: 'Buey', imagenUrl: 'https://png.pngtree.com/background/20230525/original/pngtree-an-oxen-in-a-field-with-large-horns-behind-him-picture-image_2735138.jpg' },
      { signo: 'Tigre', imagenUrl: 'http://3.bp.blogspot.com/-PeSn1hz8iZw/UVrQ7nS3_HI/AAAAAAAAAVs/U_YCBFrMa-w/s1600/animal_020.jpg' },
      { signo: 'Conejo', imagenUrl: 'https://3.bp.blogspot.com/-U8PDcjpIDaQ/Ubn9mMq6VpI/AAAAAAAAAkY/akchnltxdnQ/s1600/conejos.jpg' },
      { signo: 'Dragón', imagenUrl: 'http://getwallpapers.com/wallpaper/full/6/9/1/1060212-red-dragon-wallpapers-2005x1317-ipad.jpg' },
      { signo: 'Serpiente', imagenUrl: 'https://deserpientes.net/wp-content/uploads/v%C3%ADbora-de-arbusto.jpg' },
      { signo: 'Caballo', imagenUrl: 'http://1.bp.blogspot.com/-xQeXdEgGASI/UZXsAG8nXQI/AAAAAAAABYA/Z6FaH9_RXns/s1600/CABALLO%2BESPLENDIDO%2BFONDO%2BVERDE.jpg' },
      { signo: 'Cabra', imagenUrl: 'https://cdn.pixabay.com/photo/2017/09/10/23/38/goat-2737355_1280.jpg' },
      { signo: 'Mono', imagenUrl: 'https://encuriosidades.com/wp-content/uploads/2020/07/Curiosidades-de-los-monos.jpg' },
      { signo: 'Gallo', imagenUrl: 'http://upload.wikimedia.org/wikipedia/commons/d/d8/Gallo_de_corral_(view_large).jpg' },
      { signo: 'Perro', imagenUrl: 'https://www.elmueble.com/medio/2023/03/09/perro-de-raza-rottweiler_9f7a22a7_230309180127_900x900.jpg' },
      { signo: 'Cerdo', imagenUrl: 'https://www.partesdel.com/wp-content/uploads/Cabeza-del-cerdo.jpg' }
    ];
    const indice = (anio - 1900) % 12;
    return signosChinos[indice];
  }

  // Método para calcular la edad exacta
  calcularEdad(fechaNacimiento: Date): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    // Verificar si el cumpleaños ya ocurrió este año
    if (
      hoy.getMonth() < fechaNacimiento.getMonth() || 
      (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }

    return edad;
  }

  // Método para imprimir el resultado
  imprimirResultado(): void {
    if (this.formulario.valid) {
      const { nombre, apellidop, apellidom, fecha } = this.formulario.value;
      const fechaNacimiento = new Date(fecha);
      const anioNacimiento = fechaNacimiento.getFullYear();

      const { signo, imagenUrl } = this.calcularZodiacoChino(anioNacimiento);
      const edad = this.calcularEdad(fechaNacimiento);

      this.resultado = `Hola ${nombre} ${apellidop} ${apellidom}, tienes ${edad} años y tu signo chino es ${signo}.`;
      this.imagenSigno = imagenUrl;
    }
  }
}
