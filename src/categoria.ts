import { Stream } from "./stream.js";

export class Categoria{
    nombre:string;
    descripcion:string;
    imagen:string;
    streamings: Stream[];

    constructor(nombre:string, descripcion:string, imagen:string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.streamings = [];
    }   

    agregarStream(stream:Stream):void{
        this.streamings.push(stream);
    }

    listarStreams():void{
        console.log(this.streamings)
    }
}