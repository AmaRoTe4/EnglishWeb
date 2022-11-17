import { DataJuego } from "../../../interfaces";

export const asignarValor = (cantidad:number , tema:string):number => {
    let aux = 
    (tema === 'Acciones' && (cantidad > 155 || cantidad === 0)) ? 155 : 
    (tema === 'Adjetivos' && (cantidad > 97 || cantidad === 0)) ? 97: 
    (tema === 'Cosas' && (cantidad > 286 || cantidad === 0)) ? 286 :
    (tema === 'Familia' && (cantidad > 18 || cantidad === 0)) ? 18 : 
    (tema === 'Informatica' && (cantidad > 80 || cantidad === 0)) ? 80 :
    (tema === 'Numeros' && (cantidad > 58 || cantidad === 0)) ? 58 : 
    (tema === 'Fechas' && (cantidad > 44 || cantidad === 0)) ? 44 : cantidad
    return aux;
}

export const DataPartida = (tema:string , valores:boolean[] , cantidad:number):DataJuego => {
    return {
        Tema: tema,
        Salida: valores[1],
        OrdernDeIdioma: valores[2],
        Total: valores[0],
        Cantidad: cantidad
    }
}
