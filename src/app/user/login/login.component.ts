import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private title :Title){}


  ngOnInit(): void {
    
    // console.log(this.title.getTitle())
    // this.title.setTitle("Hello")
  }

}
