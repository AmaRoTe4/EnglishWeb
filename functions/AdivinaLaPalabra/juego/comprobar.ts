import { Palabras } from '../../../interfaces';

export function ComprobarEsp(
    palabras:Palabras[] , 
    respuesta:string , 
    //setContadores:Dispatch<SetStateAction<number[]>>
):boolean {
    let resp:boolean = false;

    for(let i:number = 0; i < palabras[0].palabraEnEspañol.length; i++){
        resp = respuesta.toLowerCase() === palabras[0].palabraEnEspañol[i].toLowerCase() 
    }

    return resp;
}

export function ComprobarIng(
    palabras:Palabras[] , 
    respuesta:string , 
    //setContadores:Dispatch<SetStateAction<number[]>>
):boolean{
    let resp:boolean = false;

    for(let i:number = 0; i < palabras[0].palabraEnIngles.length; i++){
        resp = respuesta.toLowerCase() === palabras[0].palabraEnIngles[i].toLowerCase() 
    }

    return resp;
}


