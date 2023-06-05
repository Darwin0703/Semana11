import { Plataforma } from "./plataforma.js";

export class Aplicacion{
    plataformas:Plataforma[];

    constructor(plataforma?: Plataforma){
        if(plataforma){
            this.plataformas = [plataforma];
            plataforma.agregarAplicacion(this);
        }else{
            this.plataformas = [];
        }
    }

    agregarPlataforma(plataforma:Plataforma):void{
        this.plataformas.push(plataforma);
        plataforma.agregarAplicacion(this);
    }

    listadoPlataformas():void{
        console.log(this.plataformas);
    }
}