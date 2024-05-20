import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() 
  {
     
  }

  ngOnInit(): void 
  {
    document.body.style.backgroundColor="#0E1F40";
  }

}
