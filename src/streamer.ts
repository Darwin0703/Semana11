import { Canal } from "./canal.js";

export class Streamer{
    nickName:string;
    descripcion:string;
    redesSociales:string;
    canal:Canal[];

    constructor(nickName:string, descripcion:string, redesSociales:string, canal:Canal){
        this.nickName = nickName;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canal = [canal];
    }
}