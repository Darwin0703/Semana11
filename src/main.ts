import { Aplicacion } from "./aplicacion.js";
import { Canal } from "./canal.js";
import { Categoria } from "./categoria.js";
import { Plataforma } from "./plataforma.js";
import { Stream } from "./stream.js";
import { Streamer } from "./streamer.js";

//Se crean dos objetos de tipo Plataforma
const plataforma1 = new Plataforma("Twich", "logo.png", "Pltaforma de streaming", "Samsung");
const plataforma2 = new Plataforma("YouTube", "logo.jpg", "Pltaforma de videos", "Google");

//Se crea un objeto de tipo Aplicacion y se agregan las plataformas
const aplicacion1 = new Aplicacion();
aplicacion1.agregarPlataforma(plataforma1);
aplicacion1.agregarPlataforma(plataforma2)

//Se muestra el listado de Plataformas
console.log("Listado de plataformas: ")
aplicacion1.listadoPlataformas(); 

//Se muestra el detalle de la plataforma buscada por nombre
console.log("Detalle de plataformas: ")
plataforma1.mostrarDetallePlataforma();
plataforma2.mostrarDetallePlataforma();

//Se crea el Streamer
const streamer1 = new Streamer("Ninja", "Jugador de Fornite", "@ninja");
const streamer2 = new Streamer("AuronPlay", "Jugador", "@AuronPlay");

//Se crean objetos de tipo Canal y se pasa el Streamer
 const canal1 = new Canal("Ninja", "banner.img", "Canal de fornite", streamer1);
 const canal2 = new Canal ("Auron", "Banner.jpg", "Videojuegos", streamer2);

//Se agregan los canales
plataforma1.agregarCanal(canal1);
plataforma1.agregarCanal(canal2);

//Se listan los canales
console.log("Listado de Canales: ")
plataforma1.listarCanales();

//Se muestra el detalle de un canal
console.log("Detalle de Canales: ")
canal1.mostrarDetalleCanal();
canal2.mostrarDetalleCanal();

//Se muestra listado de StreamerS
console.log("Listado de Streamers: ")
plataforma1.listarStreamers();

//Se muestra el detalle de un Streamer
console.log("Detalle de Streamer: ")
streamer1.mostrarDetalleStreamer();
streamer2.mostrarDetalleStreamer();

//Se crea un objeto tipo categoria
const categoria1 = new Categoria("videojuegos", "stream de vieojuegos", "imagen.img");
const categoria2 = new Categoria("Reaccion", "stream de reacciones", "imagen.jpg");

//Se crea un objeto tipo Stream
const Stream1 = new Stream(new Date(),"1.56 h", canal2, categoria2);
const Stream2 = new Stream(new Date(),"0.52 h", canal1, categoria1);

categoria1.agregarStream(Stream1);
categoria1.agregarStream(Stream2);

//Se muestra listado de Streams por categoria
console.log("Listado de Streamers por Categoria: ")
categoria1.listarStreams();

//Se muestra listado de Streams por Canal
console.log("Listado de Streamers por Canal: ")
canal1.listarStreams();
canal2.listarStreams();

//Se muestra el detalle de un Stream
console.log("Detalle de Stream: ")
Stream1.mostrarDetalleStream();
Stream2.mostrarDetalleStream();
