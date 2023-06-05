export class Plataforma {
    constructor(nombre, logo, descripcion, patrocinador) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.patrocinador = patrocinador;
        this.canales = [];
    }
    agregarAplicacion(aplicacion) {
        this.aplicacion = aplicacion;
    }
    agregarCanal(canal) {
        this.canales.push(canal);
        canal.agregarPlataforma(this);
    }
    mostrarDetallePlataforma() {
        console.log(this);
    }
    listarCanales() {
        console.log(this.canales);
    }
    listarStreamers() {
        this.canales.forEach((canal) => {
            canal.mostrarStreamer();
        });
    }
}
