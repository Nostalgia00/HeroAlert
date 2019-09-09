import {Injectable } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import {AntiHero} from '../data_model/antiheroes';

@Injectable()
export class AntiHeroListService {

    //list of Antiheroes taken from firebase database
    private antiheroListRef = this.db.list<AntiHero>('AntiHeroes',ref=>ref.orderByChild('antiheroName'));

    constructor(private db: AngularFireDatabase) { 

    }
    // method for getting list of antiheroes
    getAntiHeroList() {
        return this.antiheroListRef;
    }
    //method for adding a new antihero to the database
    addAntiHero(dataAntiHero: AntiHero) {
        return this.antiheroListRef.push(dataAntiHero);
    }
    //method for updating the database. NOT USED
    updateAntiHero(dataAntiHero: AntiHero) {
        return this.antiheroListRef.update(dataAntiHero.key, dataAntiHero);
    }
    //method for removing from the database. NOT USED
    removeAntiHero(dataAntiHero: AntiHero) {
        return this.antiheroListRef.remove(dataAntiHero.key);
    }
    // method for removing from the database using the key. NOT USED
    removeAntiHeroByKey(k: string)
    {
        return this.antiheroListRef.remove(k);
    }
}