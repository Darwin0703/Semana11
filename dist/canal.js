export class Canal {
    constructor(nombre, banner, descripcion, streamer, plataforma) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.streamer = streamer;
        this.plataforma = plataforma;
    }
    agregarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
}
