import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  mainComponetData;

  constructor(private sharing:SharingService) { }

  ngOnInit(): void {
this.getData();

  }


  getData(){
    this.sharing.sharedData.subscribe(
(data)=>{
  this.mainComponetData=data;
})
  }

  

}
