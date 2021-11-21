import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

export interface Message {
  name: string;
  email: string;
  message: string;
  time: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private realTimedb: AngularFireDatabase) { }

  getData(): Observable<any> {
    // List will give us our data from our Database in the form of Array even tho it still JSON underneath
    return this.realTimedb.list<Message>('send').valueChanges();
  }

  sendMessage(name: string, email: string, message: string) {
    // Get current timestamp
    const currTime = Number(new Date())

    // Convert timestamp into readable time string
    const readableTime = new Date(currTime).toLocaleTimeString()

    // Convert timestamp into readable date string
    const readableDate = new Date(currTime).toDateString()

    // Push new message to message list with time and date data
    this.realTimedb
      .list<Message>('send')
      .push({ name, email, message, time: readableTime, date: readableDate })

    // Update send meta data
    this.realTimedb
      .object('send')
      .update({ 'last_updated_at': currTime })
  }


}
