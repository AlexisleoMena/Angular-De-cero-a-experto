let nombre: string;
nombre = "Alexis";

let apellido: string = "Mena";
let edad: number = 2;
let estaSoltero: boolean = true;
let CantidadDeDinero: null = null;
let destinoTuristico: undefined = undefined;
let claveInstagram: string | number = "hola123";
let claveGmail: string | number | boolean = 123;

// unknown no permite acceder a propiedades arbitrarias, estas variables deben estar
// dentro de condicionales que aseguren que el tipo de dato almacenado le corresponde tal propiedad.
let res: unknown = ['Alexis', 'Mena'];
Array.isArray(res) && res.sort();

// any permite acceder a propiedades arbitrarias, incluso no inexistentes.
let claveFacebook: any = 123;
claveFacebook.toUpperCase();


