import {Injectable } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import {Emergency} from '../data_model/emergencies';

@Injectable()
export class EmergencyListService {

    //list of emergencies taken from firebase database
    private emergencyListRef = this.db.list<Emergency>('Emergencies',ref=>ref.orderByChild('emergencyName'));
 
    constructor(private db: AngularFireDatabase) { 

    }
    // method for getting list of emergencies
    getEmergencyList() {
        return this.emergencyListRef;
    }
    //method for adding a new emergency to the database
    addEmergency(dataEmergency: Emergency) {
        return this.emergencyListRef.push(dataEmergency);
    }
    //method for updating the database. NOT USED
    updateEmergency(dataEmergency: Emergency) {
        return this.emergencyListRef.update(dataEmergency.key, dataEmergency);
    }
    //method for removing from the database. NOT USED
    removeEmergency(dataEmergency: Emergency) {
        return this.emergencyListRef.remove(dataEmergency.key);
    }
    // method for removing from the database using the key. NOT USED
    removeEmergencyByKey(k: string)
    {
        return this.emergencyListRef.remove(k);
    }
}