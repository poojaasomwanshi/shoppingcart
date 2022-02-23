import { Injectable } from '@angular/core';
import { Firestore,collectionData,addDoc,collection, doc,docData ,deleteDoc,updateDoc,query,where,QuerySnapshot, getDocs} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface Note{
  id?:string;
  title:string;
  text:string;
}
export interface Userdata{
  id?:string;
  email:string;
  password:string;
}
export interface Logindata{
  id?:string;
  email:string;
  password:string;
}
export interface Signupata{
  id?:string;
  username:string;
  mobile:number;
  email:string;
  password:string;
}
export interface Regdata{
  id?:string;
  email:string;
  password:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private firestore:Firestore) { }


  // const querySnapshot = await getDocs(q);
  // QuerySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  //LOGINDATA
  addlogUser(logindata:Logindata){
    const loguserdataRef=collection(this.firestore,'logindata');
    return addDoc(loguserdataRef,logindata);
  }
  getlogUsers():Observable<Logindata[]>{
    const loguserdataRef= collection(this.firestore,'logindata');
    return collectionData(loguserdataRef,{idField:'id'}) as Observable<Logindata[]>;
  }
  getlogUserById(id):Observable<Logindata>{
    const loguserdataDocRef= doc(this.firestore,`logindata/${id}`);
    return docData(loguserdataDocRef,{idField:'id'}) as Observable<Logindata>;
  }
//SIGNUPDATA
addsignupData(signupdata:Signupata){
  const signupdataRef=collection(this.firestore,'signupdata');
  return addDoc(signupdataRef,signupdata);
}
getsignupData():Observable<Signupata[]>{
  const signupdataRef= collection(this.firestore,'signupdata');
  
  return collectionData(signupdataRef,{idField:'id'}) as Observable<Signupata[]>;
}
getsignupDataById(id):Observable<Signupata>{
  const signupdataDocRef= doc(this.firestore,`signupdata/${id}`);
  return docData(signupdataDocRef,{idField:'id'}) as Observable<Signupata>;
}












  //DEMODATA
  addUser(userdata:Logindata){
    const userdataRef=collection(this.firestore,'userdata');
    return addDoc(userdataRef,userdata);
  }
  getUsers():Observable<Logindata[]>{
    const userdataRef= collection(this.firestore,'userdata');
    return collectionData(userdataRef,{idField:'id'}) as Observable<Logindata[]>;
  }
//one specific document
getUserById(id):Observable<Userdata>{
  const userdataDocRef= doc(this.firestore,`userdata/${id}`);
  return docData(userdataDocRef,{idField:'id'}) as Observable<Userdata>;
}
//whole array
  getNotes():Observable<Note[]>{
    const notesRef= collection(this.firestore,'notes');
    return collectionData(notesRef,{idField:'id'}) as Observable<Note[]>;
  }
  //one specific document
  getNoteById(id):Observable<Note>{
    const noteDocRef= doc(this.firestore,`notes/${id}`);
    return docData(noteDocRef,{idField:'id'}) as Observable<Note>;
  }

  addNote(note:Note){
    const notesRef=collection(this.firestore,'notes');
    return addDoc(notesRef,note);
  }

  deleteNote(note:Note){
    const noteDocRef= doc(this.firestore,`notes/${note.id}`);

    return deleteDoc(noteDocRef);
  }
  updateNote(note:Note){
    const noteDocRef= doc(this.firestore,`notes/${note.id}`);

    return updateDoc(noteDocRef, {title:note.title, text:note.text});
  }
}
