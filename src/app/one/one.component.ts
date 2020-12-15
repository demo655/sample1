import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
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
