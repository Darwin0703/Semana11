import { Plataforma } from "./plataforma.js";
import { Streamer } from "./streamer.js";

export class Canal{
    nombre:string;
    banner:string;
    descripcion:string;
    streamer:Streamer;
    plataforma:Plataforma;

    constructor(nombre:string, banner:string, descripcion:string, streamer:Streamer, plataforma:Plataforma){
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.streamer = streamer;
        this.plataforma = plataforma;
    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataforma = plataforma;
    }
}