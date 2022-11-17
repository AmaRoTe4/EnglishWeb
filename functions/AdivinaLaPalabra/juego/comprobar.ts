import { Palabras } from '../../../interfaces';

export const resultado = (orden:boolean , respuesta:string , seleccionado:Palabras):boolean => {
    let respCorrecta:string[] = !orden ? seleccionado.palabraEnEspañol : seleccionado.palabraEnIngles;

    let aux:boolean[] = respCorrecta.map((n) => { 
        return respuesta.toLowerCase() === n.toLowerCase() 
    })

    return aux.includes(true)
}


