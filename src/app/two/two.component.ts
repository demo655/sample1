import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  mainComponetData

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
