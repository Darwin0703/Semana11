import { Canal } from "./canal.js";
import { Stream } from "./stream.js";

export class Streamer{
    nickName:string;
    descripcion:string; 
    redesSociales:string;
    canales:Canal[];

    constructor(nickName:string, descripcion:string, redesSociales:string){
        this.nickName = nickName;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canales = [];
    }

    agregarCanal(canal:Canal):void{
        this.canales.push(canal);
    }

    mostrarDetalleStreamer():void{
        console.log(this);
    }

    agregarStream(stream:Stream){
        this.canales.forEach((canal)=>{
            canal.agregarStream(stream);
        });
    }
}