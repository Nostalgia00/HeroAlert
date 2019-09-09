import {Injectable } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import {Hero} from '../data_model/heroes';

@Injectable()
export class HeroListService {

    //list of heroes taken from firebase database
    private heroListRef = this.db.list<Hero>('Heroes',ref=>ref.orderByChild('heroName'));

    constructor(private db: AngularFireDatabase) { 

    }
    // method for getting list of heroes
    getHeroList() {
        return this.heroListRef;
    }
    //method for adding a new hero to the database
    addHero(dataHero: Hero) {
        return this.heroListRef.push(dataHero);
    }
    //method for updating the database. NOT USED
    updateHero(dataHero: Hero) {
        return this.heroListRef.update(dataHero.key, dataHero);
    }
    //method for removing from the database. NOT USED
    removeHero(dataHero: Hero) {
        return this.heroListRef.remove(dataHero.key);
    }
    // method for removing from the database using the key. NOT USED
    removeHeroByKey(k: string)
    {
        return this.heroListRef.remove(k);
    }
}