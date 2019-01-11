import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from './models/User';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;

  private loggedIn = new BehaviorSubject<boolean>(false);
  private loggedUser = new BehaviorSubject<string>(null);


  constructor(public afs: AngularFirestore) { 
    this.userCollection = afs.collection<User>('usuarios');
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getUsers(){
    return this.users;
  }

 
  addUser( user: User){
    this.userCollection.add(user);
  }

  get isLoggedIn() {
    
    return this.loggedIn;
  }
 
  setLogIn(logged: boolean){
    this.loggedIn.next(logged);    
  }

  setLoggedInUser(user: string){
    this.loggedUser.next(user);
  }

  get getLoggedUser(){
    return this.loggedUser;
  }
  
}
