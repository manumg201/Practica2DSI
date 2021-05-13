export class Comunidad {
    nombre:string;
    TQueda?:number;
    restricciones:Array<string>;

    public constructor(nombre:string, restricciones:Array<string>, TQueda?:number){
        this.nombre = nombre;
        this.restricciones = restricciones;
        this.TQueda = TQueda;
    }
}
