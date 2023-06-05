import { Plataforma } from "./plataforma.js";
import { Stream } from "./stream.js";
import { Streamer } from "./streamer.js";

export class Canal{
    nombre:string;
    banner:string;
    descripcion:string;
    streamer:Streamer;
    plataforma:Plataforma | undefined;
    streamings:Stream[];

    constructor(nombre:string, banner:string, descripcion:string, streamer:Streamer){
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.streamer = streamer;
        streamer.agregarCanal(this);
        this.streamings = [];
    }

    agregarPlataforma(plataforma:Plataforma):void{
        this.plataforma = plataforma;
    }

    agregarStream(stream:Stream):void{
        this.streamings.push(stream);
    }

    mostrarStreamer():void{
        console.log(this.streamer);
    }

    mostrarDetalleCanal():void{
        console.log(this)
    }

    listarStreams():void{
        console.log(this.streamings)
    }
}