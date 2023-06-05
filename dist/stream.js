export class Stream {
    constructor(fecha, duracion, canal, categoria) {
        this.fecha = fecha;
        this.duracion = duracion;
        this.canal = canal;
        canal.agregarStream(this);
        this.categorias = [categoria];
    }
    agregarcCategoria(categoria) {
        this.categorias.push(categoria);
    }
    mostrarDetalleStream() {
        console.log(this);
    }
}
