import { registerLocaleData } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Comunidad } from './comunidad';
import { Usuario } from './usuario';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practica2';

  public main:string = 'inicioSes';
  public comunidadA:string = 'Madrid';
  public hayTQueda:string = 'si';
  public nombreU:string = "";
  public corrU:string = "";
  public passwU:string = "";
  public passwU2:string = "";
  public verMenu:boolean = false;
  public usuarios:Array<Usuario> = [new Usuario("Manu","manu@mail.es", "1234")];
  public comunidades:Array<Comunidad> =[new Comunidad("Madrid",["Aforo en terraza 75%"],24.00),
  new Comunidad("Castilla-La Mancha",["Aforo en terraza 60%", "Cierre perimetral", "Grupos de 6 personas"], 23.30),new Comunidad("Castilla y Leon",["Locales cerrados", "Cierre perimetral"],22.15),
  new Comunidad("Andalucia",["Aforo en terraza 90%",], 23.30),new Comunidad("Aragon",["Aforo en terraza 60%", "Cierre perimetral"]),
  new Comunidad("Principado de Asturias",["Aforo en terraza 60%", "Cierre perimetral", "Grupos de hasta 6 personas"], 23.30),new Comunidad("Islas Baleares",["Aforo en terraza 60%", "Cierre perimetral"]),
  new Comunidad("Canarias",["Aforo en terraza 80%", "Grupos de hasta 8 personas"], 23.45),new Comunidad("Cantabria",["Aforo en terraza 80%"]),
  new Comunidad("Cataluña",["Aforo en terraza 40%", "Cierre perimetral"], 23.30),new Comunidad("Comunidad Valenciana",["Aforo en terraza 50%", "Cierre perimetral"],23.00),
  new Comunidad("Extremadura",["Aforo en terraza 60%", "Cierre perimetral"], 23.15),new Comunidad("Galicia",["Aforo en terraza 40%", "Cierre perimetral"],21.30),
  new Comunidad("Region de Murcia",["Aforo en terraza 60%", "Cierre de locales 22.30"], 23.30),new Comunidad("Comunidad floral de Navarra",["Aforo en terraza 60%", "Cierre perimetral"],23.00),
  new Comunidad("Pais Vasco",["Aforo en terraza 60%", "Aforo en interior 40%"], 23.30),new Comunidad("La Rioja",["Aforo en terraza 50%", "Cierre perimetral"],23.00)];

  mostrarRestricciones(){
    if (this.main != 'inicioSes' && this.main != 'registro'){
      this.verMenu= false;
      this.main = 'restricciones';
    }
  }
  mostrarEstadisticas(){
    if (this.main != 'inicioSes' && this.main != 'registro'){
      this.verMenu= false;
      this.main = 'estadisticas';
    }
  }
  mostrarInicio(){
    if (this.main != 'inicioSes' && this.main != 'registro'){
      this.verMenu= false;
      this.main = 'inicio';
    }
    if(this.main == 'registro'){
      this.main = 'inicioSes'
    }
  }
  mostrarRegistro(){
    this.main = 'registro';
  }
  mostrarMenu(){
    if (this.main != 'inicioSes' && this.main != 'registro'){
      this.verMenu = !this.verMenu;
    }
  }
  cerrarMenu(){
    this.verMenu= false;
  }
  cerrarSesion(){
    this.verMenu = false;
    this.nombreU ="";
    this.corrU = "";
    this.passwU="";
    this.passwU2="";
    this.main = 'inicioSes'
  }
  setTQueda(){
    for(var i = 0; i < this.comunidades.length; i++) {
      if(this.comunidades[i].nombre == this.comunidadA){
        if(this.comunidades[i].TQueda == undefined){
          this.hayTQueda = 'no';
        }else{
          this.hayTQueda = 'si';
        }
      }
    }
  }
  
  getTQueda(){
    for(var i = 0; i < this.comunidades.length; i++) {
      if(this.comunidades[i].nombre == this.comunidadA){
        if(this.comunidades[i].TQueda == undefined){
          this.hayTQueda = 'no';
        }else{
          this.hayTQueda = 'si';
        }
        
        return this.comunidades[i].TQueda;
      }
    }
    return "";
  }
  getRestriccionesA(){
    for(var i = 0; i < this.comunidades.length; i++) {
      if(this.comunidades[i].nombre == this.comunidadA){
        return this.comunidades[i].restricciones;
      }
    }
    return [""];
  }

  inicioSesion(){
    for(var i = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].correo == this.corrU){
        if (this.usuarios[i].passw == this.passwU){
          alert("Sesion iniciada correctamente");
          this.main = 'inicio';
          return; 
        }
        else{
          alert("La contraseña introducida no coincide con la del usuario introducido")
          return;
        }
      }
    }
    alert("El correo introducido no existe")
  }
  registro(){
    for(var i = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].correo == this.corrU){
        alert("El correo introducido ya existe")
        return;
      }
      if(this.usuarios[i].nombre == this.nombreU){
        alert("El usuario introducido ya existe")
        return;
      }
    } 
    if(this.passwU != this.passwU2){
      alert("Las contraseñas no coinciden");
      return;
    }
    if(this.nombreU != "" && this.passwU != "" && this.corrU != ""){
      this.usuarios.push(new Usuario(this.nombreU, this.corrU, this.passwU));
      this.main = 'inicioSes';
      alert("Se ha registrado el usuario correctamente")
    }
  }
}


