import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { Icategory }from 'src/app/models/icategory';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
productlist:Iproduct[]; 
totalprice:number=0;
quantity1:number=0;
catelist:Icategory[];
selectedcategoryid:number=0;
  constructor(
  private tr:TrackService

  ) {
    this.catelist=[
      {id:1,name:"laptop"},
      {id:2,name:"mobiles"},
      {id:3,name:"tv"},
    ]
    this.productlist=[
      {id:100,name:"lenovo",price:10000,quantity:1,imgUrl:"https://picsum.photos/seed/picsum/50/50",categoryid:1 },
      {id:200,name:"apple",price:9000,quantity:3,imgUrl:"https://picsum.photos/seed/picsum/50/50",categoryid:3 },
      {id:300,name:"dell",price:70000,quantity:1,imgUrl:"https://picsum.photos/seed/picsum/50/50",categoryid:2 },
      {id:300,name:"samsung",price:5000,quantity:4,imgUrl:"https://picsum.photos/seed/picsum/50/50",categoryid:4 }
  ]
   }

  ngOnInit(): void {
  }
  buy(price:number,count:number,quantity:number){
    this.totalprice= count * price;
    this.quantity1=quantity;
  }
  selectlaptop(){
    this.selectedcategoryid=1;
  }

}
