import { Aplicacion } from "./aplicacion.js";
import { Canal } from "./canal.js";

export class Plataforma{
    nombre:string;
    logo:string;
    descripcion:string;
    patrocinador:string;
    canales:Canal[];
    aplicacion:Aplicacion;

    constructor(nombre:string, logo:string, descripcion:string, patrocinador:string, aplicacion:Aplicacion){
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.patrocinador = patrocinador;
        this.canales = [];
        this.aplicacion = aplicacion;
    }    

    agregarCanal(canales:Canal[]):void{
        canales.forEach((canal) => {
            canal.agregarPlataforma(this);
        });
    }

    mostrarPlataformas():void{
        console.log()
    }
}