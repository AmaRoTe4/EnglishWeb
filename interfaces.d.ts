export interface DataJuego{
    Tema: string,
    Salida: boolean,
    OrdernDeIdioma: boolean,
    Total: boolean,
    Cantidad: number
}

export interface Palabras {
    id: number,
    palabraEnIngles: string[],
    palabraEnEspañol: string[],
    estado:number;
    respuesta:string;
}

export interface CuerpoPalabras{
    es:string,
    en:string,
    prtn:string,
}