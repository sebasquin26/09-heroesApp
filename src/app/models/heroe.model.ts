

export class HeroeModel{

    id: string |undefined;
    nombre: string;
    poder: string;
    vivo:boolean;


    constructor(){
        this.vivo = true;
        this.id = undefined;
        this.nombre='';
        this.poder='';
       
    }
}