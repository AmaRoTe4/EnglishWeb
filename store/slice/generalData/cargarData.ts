import { CuerpoPalabras } from '../../../interfaces'
import Abecedario from '../../../Data/Teoria/Abcedario.json'
import PalabrasMasComunes from '../../../Data/Teoria/PalabrasMasComunes.json'
import Numeros from '../../../Data/Teoria/Numeros.json'
import DiasYMeses from '../../../Data/Teoria/DiasYMeses.json'
import Colores from '../../../Data/Teoria/Colores.json'
import FigurasGeometricas from '../../../Data/Teoria/FigurasGeometricas.json'
import PartesDelCuerpo from '../../../Data/Teoria/PartesDelCuerpo.json'
import Familia from '../../../Data/Teoria/Familia.json'
import Pronombres from '../../../Data/Teoria/Pronombres.json'
import Profesiones from '../../../Data/Teoria/Profesiones.json'
import Acciones from '../../../Data/Juego/Acciones.json'
import Adjetivos from '../../../Data/Juego/Adjetivos.json'
import Cosas from '../../../Data/Juego/Cosas.json'
import Fechas from '../../../Data/Juego/Fechas.json'
import Informatica from '../../../Data/Juego/Informatica.json'

export function nula(){}

//en desuso

//export default function Carga():CuerpoPalabras[]{
//    let data:CuerpoPalabras[] = []

//    if(Acciones)  Acciones.map(n => data.push(n)) 
//    if(Adjetivos)  Adjetivos.map(n => data.push(n)) 
//    if(Cosas)  Cosas.map(n => data.push(n)) 
//    if(Familia)  Familia.map(n => data.push(n)) 
//    if(Fechas)  Fechas.map(n => data.push(n)) 
//    if(Informatica)  Informatica.map(n => data.push(n)) 
//    if(Numeros)  Numeros.map(n => data.push(n)) 
//    if(Abecedario)  Abecedario.map(n => data.push(n));
//    if(PalabrasMasComunes)  PalabrasMasComunes.map(n => data.push(n))
//    if(Numeros)  Numeros.map(n => data.push(n))
//    if(DiasYMeses)  DiasYMeses.map(n => data.push(n))
//    if(Colores)  Colores.map(n => data.push(n))
//    if(FigurasGeometricas)  FigurasGeometricas.map(n => data.push(n))
//    if(PartesDelCuerpo)  PartesDelCuerpo.map(n => data.push(n))
//    if(Familia)  Familia.map(n => data.push(n))
//    if(Pronombres)  Pronombres.map(n => data.push(n))
//    if(Profesiones)  Profesiones.map(n => data.push(n))

//    return data
//}