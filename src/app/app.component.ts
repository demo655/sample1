import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  form;
  // phoneDetails;
   seqResult;
   opPhone=[];

  constructor(private fb:FormBuilder){}

  ngOnInit(){
    // this.PhoneForm();
    // console.log(this.phoneDetails);
   this.form = new FormGroup({
      phoneDetails: new FormArray([
        new FormControl(''),
      ]),
    });
   
  }


  get phoneDetails():FormArray{
    return this.form.get('phoneDetails') as FormArray;
  }
  // addAnotherField(){
  //   this.phoneDetail.push(new FormControl(''))
  // }

  onSubmit(){
    console.log('phoneDetails!!',this.phoneDetails.value)
  //   this.phoneDetails.value.forEach((val,i)=>{
  // this.opPhone.push({'phoneNumber':val})      
  //   })
    // console.log('op',this.opPhone);
    this.opPhone=[];
    this.phoneDetails.value.forEach((val,i)=>{
this.opPhone.push({Personcontact:val});

    })
    console.log('output2',this.opPhone);
  }


  addAnother(){
    this.phoneDetails.push(new FormControl(''))
  }


  deleteField(index){
    this.phoneDetails.removeAt(index);
  }
 
  getSequenceNumber(index){
    if(index){
      this.seqResult=0;
    if(index%2==1){
      this.seqResult=(index*index)+1;
    }
    else{
      this.seqResult=(index*index)-1
    }
    }
  }

  









  
}
