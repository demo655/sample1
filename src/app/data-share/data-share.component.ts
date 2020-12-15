import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-data-share',
  templateUrl: './data-share.component.html',
  styleUrls: ['./data-share.component.css']
})
export class DataShareComponent implements OnInit {
  sharingResult=''

  setData(event){
    console.log('event',event);
    // this.sharingResult=event.target.value;
    this.share.setSharedData(event.target.value);

  }

  constructor(private share:SharingService) { }

  ngOnInit(): void {
  }

}
