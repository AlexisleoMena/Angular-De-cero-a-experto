interface Detalles {
  autor: string;
  anio: number;
}
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}
const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Ed Sheeran",
    anio: 2015,
  },
};
// const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;
const { volumen, segundo, cancion: temita, detalles } = reproductor;
const { autor } = detalles;
console.log("cancion: ", temita, " | autor: ", autor);


let nombres: string[] = ["Juan", "Pedro", "Alexis"]
let [  , ,miNombre ] = nombres;
console.log("Soy", miNombre)


interface Persona {
  nombre: string,
  edad: number
}
const usuarios: Persona[] = [ {nombre: "Pedro", edad: 21}, {nombre:"Alexis", edad:15}, {nombre: "Juan", edad: 22} ] 
let [ , miUsuario, ] = usuarios;
console.log("Soy", miUsuario.nombre)
