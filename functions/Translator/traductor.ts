import json from '../../Data/general.json'
import { CuerpoPalabras } from '../../interfaces';

export const TraduccionIng = (texto:string):string => {
    if(json.length > 0){ 
        const palabras:CuerpoPalabras[] = json.filter(n => 
        {
            const textAux = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() 
            const aux = n.es.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split("/")

            const retorno = aux.filter(m => m === textAux)
            
            if(retorno.length > 0) return n
        });

        if(palabras[0]){
            return palabras[0].en
        }
    }
    return ''
}

export const TraduccionEsp = (texto:string):string => {
    if(json.length > 0){ 
        const palabras:CuerpoPalabras[] = json.filter(n => 
        {
            const textAux = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            const aux = n.en.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split("/") 

            const retorno = aux.filter(m => m === textAux)
            
            if(retorno.length > 0) return n
        });

        if(palabras[0]){
            return palabras[0].es
        }
    }
    return ''
}
