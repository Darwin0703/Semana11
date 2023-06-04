import { Canal } from "./canal.js";
import { Categoria } from "./categoria.js";

export class Stream{
    fecha:Date;
    duracion:string;
    canal:Canal[];
    categorias:Categoria[];

    constructor(fecha:Date, duracion:string, canal:Canal){
        this.fecha = fecha;
        this.duracion = duracion;
        this.canal = [canal];
        this.categorias = [];
    }
}