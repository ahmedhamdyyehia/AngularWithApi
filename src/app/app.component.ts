import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TrackService} from './services/track.service'


@Component({
  selector: 'app-root',//dirctive component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CourseDemo';
constructor(private user:TrackService){
  this.user.getallcourse().subscribe(data=>{
    console.log(data)
  })
}
}

