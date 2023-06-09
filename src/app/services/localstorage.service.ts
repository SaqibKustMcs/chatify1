import { Injectable } from '@angular/core';
const name='';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  addToken(key:string,value:any){
    console.log(",,,,,,,,");
    
    
   
    localStorage.setItem(key,value);
    console.log(",,,,,,,,");

    
  }
  getToken(){
   
    return localStorage.getItem("name")
  }
}
