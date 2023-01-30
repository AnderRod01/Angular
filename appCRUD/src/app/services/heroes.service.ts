import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,delay } from 'rxjs';
import { HeroeModel } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private URL = 'https://appangularcrud-default-rtdb.europe-west1.firebasedatabase.app'

  constructor(private http:HttpClient) { }
  crearHeroe (heroe:HeroeModel){
    return this.http.post('${this.URL}/heroes.json', heroe)
    .pipe(
      map((resp: any) =>{
        heroe.id = resp.name;
        return heroe
      })
    );
  }

  getHeroes (){
    return this.http.get('${ this.URL}/heroes.json')
    .pipe(
      map(resp =>{
        this.crearArreglo(resp)
        delay(1500)
      })
    )
  }

  getHeroe (id: string) {
    return this.http.get('${this.URL}/heroes/${id}.json')
  }

  private crearArreglo(heroesObj: object){

    
    const heroes: HeroeModel[] = []
    console.log(heroesObj)
    if (heroesObj === null) {return []}

    Object.keys(heroesObj).forEach (key=>{
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key
      heroes.push(heroe)
    })

    return heroes
  }

  borrarHeroe (heroe: HeroeModel){
    return this.http.delete('${this.URL}/heroes/${id}.json')
  }

  actualizarHeroe (heroe:HeroeModel){
    const heroeTemp = {
      ...heroe
    }

    delete heroeTemp.id;
    return this.http.post('${this.URL}/heroes/${ $heroe.id }.json', heroeTemp)
  }
}
