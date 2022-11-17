
export const invertirArray = (array:any[]):any[] =>{
    let aux:any[] = []
    array.forEach((n) => aux.unshift(n))
    return aux;
}