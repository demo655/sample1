import { Injectable } from '@angular/core';
import { from,Observable,of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  sharedData=new Subject();

  constructor() { }

  setSharedData(data){
    
    this.sharedData.next(data);
    console.log('inside service',data);
    console.log('share',this.sharedData);

  }
}
