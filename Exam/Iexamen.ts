export interface ITVShow{
    id: number;
    name: string;
    director: string;
    investment:number;
    cast: string;
    seasons: Iseason[];
    }
    
    export interface Iseason{
    id: number; 
    description: string;
    episodesNumber: number;
    tvshowId: number;
    }