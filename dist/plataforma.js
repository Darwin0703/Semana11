export class Plataforma {
    constructor(nombre, logo, descripcion, patrocinador, aplicacion) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.patrocinador = patrocinador;
        this.canales = [];
        this.aplicacion = aplicacion;
    }
    agregarCanal(canales) {
        canales.forEach((canal) => {
            canal.agregarPlataforma(this);
        });
    }
    mostrarPlataformas() {
        console.log();
    }
}
