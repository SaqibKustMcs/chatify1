import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


let headers1=new Headers();
headers1.append("content-Type","multipart/form-data");

@Injectable({
  providedIn: 'root'
})
export class HttpApisService {
  apiUrl="http://localhost:5000/users/getAllUsers";
   postUrl="http://localhost:5000/users/create-user";
 
   


  constructor(

    private browser:BrowserModule,
    private http:HttpClient,

  ) {

   }


   getProducts(){
    return this.http.get(this.apiUrl);
   }
 
   signup(form:any): Observable<any> {
   
    console.warn("........post api..........");
    return this.http.post( "http://localhost:5000/appointments/create-appointment", form);
  }
   
}
