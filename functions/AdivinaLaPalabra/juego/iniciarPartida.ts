//esto son los json de data
import Acciones from '../../../Data/Juego/Acciones.json'
import Adjetivos from '../../../Data/Juego/Adjetivos.json'
import Cosas from '../../../Data/Juego/Cosas.json'
import Familia from '../../../Data/Teoria/Familia.json'
import Fechas from '../../../Data/Juego/Fechas.json'
import Informatica from '../../../Data/Juego/Informatica.json'
import Numeros from '../../../Data/Teoria/Numeros.json'
import {CuerpoPalabras, Palabras} from '../../../interfaces'
import {DataJuego} from '../../../interfaces'

export default function IniciarPartida(partida:DataJuego):Palabras[] {
    const response:CuerpoPalabras[] = 
    partida.Tema === 'Cosas' ? Cosas :
    partida.Tema === 'Acciones' ? Acciones :
    partida.Tema === 'Adjetivos' ? Adjetivos :
    partida.Tema === 'Familia' ? Familia :
    partida.Tema === 'Fechas' ? Fechas :
    partida.Tema === 'Informatica' ? Informatica :
    partida.Tema === 'Numeros' ? Numeros : Cosas
    
    let aux:number[] = []
    let todos:number[] = [];
    response.map((n , i) => {
        todos.push(i);
    })
    if(!partida.Salida){
        //aleatorio
        for(let i = 0; i < partida.Cantidad ; i++){
            let random = Math.floor(Math.random()*todos.length);
            aux.push(todos[random]);
            todos = todos.filter((n , i) => i !== random);
        }
    }
    else if(partida.Salida){
        //comun
        for(let i = 0; i < partida.Cantidad ; i++){
            aux.push(todos[i]);
        }
    }
    
    let auxPalabras:Palabras[] = []
    for(let i = 0 ; i < aux.length ; i++){
        auxPalabras.push(
            {
                id: i+1,
                palabraEnEspañol: SacarPalabras(response[aux[i]].es),
                palabraEnIngles: SacarPalabras(response[aux[i]].en),
                estado: 0,
                respuesta: '',
            }
        )
    }

    return auxPalabras;
}

const SacarPalabras = (pala:string):string[] =>{
    return pala ? pala.split('/') : [''];
} 