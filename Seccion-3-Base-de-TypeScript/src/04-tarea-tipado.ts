interface Direccion {
  calle: string,
  pais: string,
  ciudad: string
}

interface SuperHeroe {
  nombre: string,
  edad: number,
  direccion: Direccion,
  detalles: () => string;
}

const superHeroe: SuperHeroe = {
  nombre: "Spiderman",
  edad: 30,
  direccion: {
    calle: "Main St",
    pais: "USA",
    ciudad: "NY"
  },
  detalles() {
    return this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais 
  }
}

console.log(superHeroe.detalles())