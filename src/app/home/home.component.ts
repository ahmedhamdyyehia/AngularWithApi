import { Component, OnInit } from '@angular/core';
import { Storedata } from '../viewmodels/storedata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Storeinfo:Storedata;
  isimageshown:boolean=true;

  constructor() {
    this.Storeinfo=new Storedata("iti","https://picsum.photos/400/200",["cairo","alex","mansoura"])
   }

  ngOnInit(): void {
  }
  toogleimage(){
    this.isimageshown=!this.isimageshown
  }

}
