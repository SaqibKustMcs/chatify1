import { Component } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';
import { HttpApisService } from '../services/http-apis.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  products:any | undefined;
  response:any;
  genderDropdown:any=[
    {id:1, value:"male"},
    {id:2, value:"female"},
    
  ];
  form:any= {
    email:"",
    password:"",
    name:"",
    gender:"",
    genderId:"",
    checkbox:false,
    selectLanguage:"HTML"
  }
  // form:any= {
  //   email:"224saqib@gmail.com",
  //   password:"",
  //   name:"naeeem ali khan",
  //   phone:"034567654321`",
  //   file:this.selectFiles
  //    gender:"",
  //  genderId:"",
  // checkbox:false,
  //   // selectLanguage:"HTML"
  // }
  previews: any=[];
  selectedFiles: any;
  formSubmit(){
    console.log(this.form)

  }
  changeGender(){
    if(this.form.genderId ==1){
      this.form.gender="male";

    }else{
      this.form.gender="female";

    }
    
    
  }
  // data:any= {
  //   name:"ali khan 33",
  //   email:"saqwerr@gmail.com",
  //  phone:"1234567890",
  //  file:this.selectedFiles
   
  // }
  
  selectFiles(event: any): void {
   
    
    this.selectedFiles = event.target.files;

  
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };
  
        reader.readAsDataURL(this.selectedFiles[i]);
        
      }console.log(this.selectedFiles);

    }
  }




  

  constructor(
    private http:HttpApisService,
    private localstorage:LocalstorageService
  ){


    http.getProducts().subscribe((data: any)=>{
      this.products=data?.data
      this.response=data
       }
      );
  }
  addPost(){
    console.log("api hit");
    this.http.signup(this.form).subscribe((data:any)=>console.warn(data));

  }

 


 





  addToken(){
    this.localstorage.addToken("name",'saqib');
  }
  getToken(){
    console.log("check.......");
   const name1 =this.localstorage.getToken;
   console.log(name1);
   console.log("check.......");



  }

}
