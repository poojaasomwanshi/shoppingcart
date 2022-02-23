import { Injectable } from '@angular/core';
import { Firestore,collectionData,addDoc,collection, doc,docData ,deleteDoc,updateDoc, setDoc} from '@angular/fire/firestore';
import { Observable,from } from 'rxjs';
import { ProfileUser } from '../models/user-profile';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore:Firestore) { }
  addUser(user:ProfileUser) : Observable<any>{
    const ref=doc(this.firestore,'users',user?.uid)
    return from(setDoc(ref,user));
  }
  updateUser(user:ProfileUser) : Observable<any>{
    const ref=doc(this.firestore,'users',user?.uid)
    return from(updateDoc(ref,{...user}));
  }

  
}
