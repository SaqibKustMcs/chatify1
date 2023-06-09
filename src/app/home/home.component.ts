import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 products:any=[
    {id:1, value:"male"},
    {id:2, value:"female"},
    
  ];

}
