function multiplicar(factorA: number, factorB: number): number {
  return factorA * factorB;
}

const esImpar = (valor: number): boolean => {
  return valor % 2 === 1;
};

const saludar = (nombre: string): void => {
  console.log(`Buenos días ${nombre}!`)
}
saludar("Alexis");

const sobreMi = (nombre: string, edad: number, ciudad?: string, pais: string = "Argentina"): void => {
  console.log(`Me llamo ${nombre}, tengo ${edad} años, y vivo en ${!ciudad.length ? "" : `${ciudad}, `} ${pais}`)
}
// sobreMi("Alexis", 20, "", "Argentina");
sobreMi("Alexis", 20, "Santa Fe", "Argentina");

interface Producto {
  stock: number;
  mostrarDetalles: () => void;
}
function comprarProducto(producto: Producto, unidadesCompradas: number): void {
  producto.stock -= unidadesCompradas;
}
const Harina: Producto = {
  stock: 50,
  mostrarDetalles() {
    console.log("Stock:", this.stock);
  },
};
comprarProducto(Harina, 20);
Harina.mostrarDetalles();
