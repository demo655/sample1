import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoang';
  result=0;

  add(n1,n2){
    console.log('n1',typeof n1);
    console.log('n2',typeof n2);
    this.result=Number(n1)+Number(n2);

  }

  multiply(n1,n2){
    this.result=Number(n1)*Number(n2);
  }

  subtract(n1,n2){
    this.result=Number(n1)-Number(n2);
  }

  divide(n1,n2){
    this.result=Number(n1)/Number(n2);
  }



  
}
