import { ITVShow, Iseason} from "./Iexamen";

const Show: ITVShow[] =[ {
    id: 1,
    name: 'Egg',
    director: 'Jorge',
investment: 12500,
cast: 'Si',
seasons:[
    {
    id: 1, 
description: 'El comienzo',
episodesNumber: 36,
tvshowId: 1,
},
{
    id: 2, 
    description: 'El progreso',
    episodesNumber: 30,
    tvshowId: 1,
},

{
    id: 3, 
    description: 'El progreso',
    episodesNumber: 3,
    tvshowId: 1,
}
]
},]


function buscarmenorinvestment(investment, Show:ITVShow[], callback){
    const filtrado = Show.filter(
        (arreglo:ITVShow) => {return arreglo.investment <14000}
     )
    if (filtrado.length>0){
      return callback(Show);
    }
    else{
        return callback('La inversion referencial es mayor a la propuesta');
    }
  }
  