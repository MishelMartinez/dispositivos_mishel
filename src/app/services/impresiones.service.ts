import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImpresionesService {

  private impresionesData:Impresion3d[]=
    [
      {
        nombre:"trex",
        tiempo:"35min",
        descripcion:"Increible dinosaurio del famoso juego de gooogle",
        material:"PLA",
        precio:"17.00",
        img:"assets/img/trex.jpeg"

      },
      {
        nombre:"pikachu",
        descripcion:"es una de las criaturas de la franquicia Pokémon.​ Este personaje hizo su primera aparición en los videojuegos Pokémon Rojo y Azul",
        tiempo:"15 min",
        material:"PLA",
        precio:"18.00",
        img:"assets/img/pikachu.jpeg"

      },
      {
        nombre:"Logo Game of thrones",
        descripcion:"“Winter is coming” o “El invierno se acerca”, es una frase que se popularizó gracias a Game of Thrones y es una de las más mencionadas especialmente en la casa de los Stark.",
        tiempo:"18 min",
        material:"PLA",
        precio:"25.00",
        img:"assets/img/game.jpeg"
      },
      {
        nombre:"Among Us",
        descripcion:"​ es un videojuego de género party y multijugador en línea desarrollado por la compañía estadounidense InnerSloth y distribuido entre junio y noviembre de 2018 para las plataformas Android, iOS y PC",
        tiempo:"18 min",
        material:"PLA",
        precio:"16.00",
        img:"assets/img/amongus2.png"
      },
      {
        nombre:"Flamingo",
        descripcion:"Llavero de flamingo rosado, on aves que se distribuyen tanto por el hemisferio occidental como por el hemisferio oriental; existen dos especies en América y una en el Viejo Mundo",
        tiempo:"18 min",
        material:"PLA",
        precio:"16.00",
        img:"assets/img/flamingo.jpg"
      }

    ];


  constructor() {


    console.log("SERVICIO LISTO");
  }


  getImpresiones(){

    return this.impresionesData;
  }


  getImpresion(idx:string){

    return this.impresionesData[idx];

  }


  searchPrinter(palabra:string):Impresion3d[]{

    let impresionesTemp:Impresion3d[] = [];
    palabra = palabra.toLowerCase();

    for(let impresion of this.impresionesData){
      let nombre = impresion.nombre.toLowerCase();

      if(nombre.indexOf(palabra)>=0){

        impresionesTemp.push(impresion);

      }
    }

    return  impresionesTemp;

  }

}


export interface Impresion3d
{

  nombre:string,
  descripcion:string,
  tiempo:string,
  material:string,
  precio:string,
  img:string

};
