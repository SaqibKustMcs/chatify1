import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products:any=[
    {id:1, value:"Mobile",discription:"In order to show you the most relevant results, we have omitted some entries very similar to the 2 already displayed."},
    {id:2, value:"Laptop",discription:"In order to show you the most relevant results, we have omitted some entries very similar to the 2 already displayed."},

    {id:3, value:"Macbook",discription:"In order to show you the most relevant results, we have omitted some entries very similar to the 2 already displayed."},
    {id:4, value:"Hp",discription:"In order to show you the most relevant results, we have omitted some entries very similar to the 2 already displayed."},
    {id:5, value:"Dell",discription:"In order to show you the most relevant results, we have omitted some entries very similar to the 2 already displayed."},
    {id:6, value:"Sumsang",discription:"In order to show you the most relevant results, we have omitted some entries very similar to the 2 already displayed."},
    
  ];
}
