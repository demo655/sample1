import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
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
