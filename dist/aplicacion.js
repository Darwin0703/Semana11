export class Aplicacion {
    constructor(plataforma) {
        if (plataforma) {
            this.plataformas = [plataforma];
            plataforma.agregarAplicacion(this);
        }
        else {
            this.plataformas = [];
        }
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
        plataforma.agregarAplicacion(this);
    }
    listadoPlataformas() {
        console.log(this.plataformas);
    }
}
