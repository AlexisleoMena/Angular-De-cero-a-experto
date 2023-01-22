let materias: Array<string> = ["Lengua", "Biología"];
let alumnos: string[] = ["Alexis", "Juan"];
let notas: number[] = [6, 7, 7, 7];
let alumno: [string, number, number] = ["Alexis", 6, 7];
let Lengua: (string | number)[] = ["Alexis", 6, 7, "Juan", 7, 7]; //Evitar. Buscar tener estructuras de datos homogéneas.

interface Alumno {
  nombre: string,
  nota1: number,
  nota2: number
  estaAprobado?: boolean
}
let Alexis: Alumno = {
  nombre: "Alexis",
  nota1: 6,
  nota2: 7
}
Alexis.estaAprobado = true;
