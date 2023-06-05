export class Canal {
    constructor(nombre, banner, descripcion, streamer) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.streamer = streamer;
        streamer.agregarCanal(this);
        this.streamings = [];
    }
    agregarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
    agregarStream(stream) {
        this.streamings.push(stream);
    }
    mostrarStreamer() {
        console.log(this.streamer);
    }
    mostrarDetalleCanal() {
        console.log(this);
    }
    listarStreams() {
        console.log(this.streamings);
    }
}
