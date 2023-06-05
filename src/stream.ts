import { Canal } from "./canal.js";
import { Categoria } from "./categoria.js";

export class Stream{
    fecha:Date;
    duracion:string;
    canal:Canal;
    categorias:Categoria[];

    constructor(fecha:Date, duracion:string, canal:Canal, categoria:Categoria){
        this.fecha = fecha;
        this.duracion = duracion;
        this.canal = canal;
        canal.agregarStream(this); 
        this.categorias = [categoria];
    }

    agregarcCategoria(categoria:Categoria):void{
        this.categorias.push(categoria);
    }

    mostrarDetalleStream():void{
        console.log(this);
    }
}