export class Streamer {
    constructor(nickName, descripcion, redesSociales) {
        this.nickName = nickName;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canales = [];
    }
    agregarCanal(canal) {
        this.canales.push(canal);
    }
    mostrarDetalleStreamer() {
        console.log(this);
    }
}
