import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from '../common/api.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  form!: FormGroup
  personForm!:FormGroup
  dataById: any;
  editId: any;
  showForm: boolean = false;

  constructor(private router: Router,
    private fb: FormBuilder,
    private apiservice:APIService) { }

  ngOnInit() {

    this.FormDetails();

  }
  submit() {
    let endpoint='form';
    console.log('this.form', this.form.value);

      
let request={
  GSTNo: this.form.value.GSTNo,
  PANNo:this.form.value.PANNo,
  Code:this.form.value.Code,
  Name:this.form.value.Name,
  Address:this.form.value.Address,
  Pincode:this.form.value.Pincode,
  Country:this.form.value.Country,
  State:this.form.value.State,
  City:this.form.value.City,
  MobileNo:this.form.value.MobileNo,
  Email:this.form.value.Email,
  currency:this.form.value.Country,
  
}

if(this.editId){
this.apiservice.patchApiCall(endpoint,request,this.editId).subscribe((Response:any)=>{
  console.log(Response);
})
}
else{
  this.apiservice.postApiCall(endpoint,request).subscribe((Response:any)=>{
    console.log(Response);
  })
}
  }
  FormDetails() {
    this.form = this.fb.group({
      GSTNo: ['', Validators.required,],
      PANNo: ['', Validators.required,Validators.pattern(/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/)],
      Code: ['', Validators.required],
      Name: ['', Validators.required, Validators.pattern("[a-zA-Z ]*$")],
      Address: ['', Validators.required],
      Pincode: ['', Validators.required],
      Country: ['', Validators.required],
      State: ['', Validators.required],
      City: ['', Validators.required],
      MobileNo: ['', Validators.required,Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)],
      Email: ['', Validators.required],
      Latitude: ['', Validators.required],
      Longitude: ['', Validators.required],
      currency: ['', Validators.required],
    })
  }
  personDetails() {
    this.personForm = this.fb.group({
      name: [],
      mobile: [],
      email:[],
      Department: [],
      Designation:[],
    })
  }

getControl(name:any):AbstractControl|null{
  return this.form.get(name)
}


  button() {
    this.router.navigateByUrl('/home')
  }

  attached() {
    this.showForm = !this.showForm;
    this.personDetails();
  }
  add(){

  }
}