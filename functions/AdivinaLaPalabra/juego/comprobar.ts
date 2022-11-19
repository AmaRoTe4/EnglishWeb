import { Palabras } from "../../../interfaces";

export const resultado = (orden:boolean , respuesta:string , seleccionado:Palabras):boolean => {
    let respCorrecta:string[] = !orden ? seleccionado.palabraEnEspañol : seleccionado.palabraEnIngles;

    let aux:boolean[] = respCorrecta.map((n) => { 
        return respuesta.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase() === n.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase() 
    })

    return aux.includes(true)
}