import {Injectable } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import {Team} from '../data_model/Teams';

@Injectable()
export class TeamListService {

    //list of teams taken from firebase database
    private teamListRef = this.db.list<Team>('Teams',ref=>ref.orderByChild('teamName'));

    constructor(private db: AngularFireDatabase) { 

    }
    // method for getting list of teams
    getTeamList() {
        return this.teamListRef;
    }
    //method for adding a new team to the database
    addTeam(dataTeam: Team) {
        return this.teamListRef.push(dataTeam);
    }
    //method for updating the database. NOT USED
    updateTeam(dataTeam: Team) {
        return this.teamListRef.update(dataTeam.key, dataTeam);
    }
    //method for removing from the database. NOT USED
    removeTeam(dataTeam: Team) {
        return this.teamListRef.remove(dataTeam.key);
    }
    // method for removing from the database using the key. NOT USED
    removeTeamByKey(k: string)
    {
        return this.teamListRef.remove(k);
    }
}