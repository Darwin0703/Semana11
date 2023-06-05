import { Aplicacion } from "./aplicacion.js";
import { Canal } from "./canal.js";

export class Plataforma{
    nombre:string;
    logo:string;
    descripcion:string;
    patrocinador:string;
    canales:Canal[];
    aplicacion:Aplicacion | undefined;

    constructor(nombre:string, logo:string, descripcion:string, patrocinador:string){
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.patrocinador = patrocinador;
        this.canales = [];
    }    
    agregarAplicacion(aplicacion:Aplicacion):void{
        this.aplicacion = aplicacion;
    }
    
    agregarCanal(canal:Canal):void{
        this.canales.push(canal);
        canal.agregarPlataforma(this);
    }   

    mostrarDetallePlataforma():void{
        console.log(this);   
    }

    listarCanales():void{
        console.log(this.canales);
    }

    listarStreamers():void{
        this.canales.forEach((canal)=>{
            canal.mostrarStreamer()
        });
    }
}