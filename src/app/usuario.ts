export class Usuario {
    nombre:string
    correo:string
    passw:string

    public constructor(nombre:string, correo:string, passw:string){
        this.nombre = nombre;
        this.correo = correo;
        this.passw = passw;
    }
}
