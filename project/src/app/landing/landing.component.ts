import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from '../common/api.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  form!: FormGroup
  personForm!:FormGroup
  show!:FormGroup
  dataById: any;
  editId: any;
  showForm: boolean = false;

  constructor(private router: Router,
    private fb: FormBuilder,
    private apiservice:APIService) { }

  ngOnInit() {
this.editId=this.apiservice.id;
 this.dataById=this.apiservice.dataById;
 console.log(this.dataById,this.editId);
 
    this.FormDetails();
  
  }
  submit() {
    let endpoint='form';
    
    console.log('this.form', this.form.value);
    this.router.navigateByUrl('/dashbord')

      
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
      GSTNo: [ this.dataById? this.dataById.GSTNo:'', Validators.required,],
      PANNo: [this.dataById? this.dataById.PANNo:'', Validators.required,Validators.pattern(/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/)],
      Code: [this.dataById? this.dataById.Code:'', Validators.required],
      Name: [this.dataById? this.dataById.Name:'', Validators.required, Validators.pattern("[a-zA-Z ]*$")],
      Address: [this.dataById? this.dataById.Address:'', Validators.required],
      Pincode: [this.dataById? this.dataById.Pincode:'', Validators.required],
      Country: [this.dataById? this.dataById.Country:'', Validators.required],
      State: [this.dataById? this.dataById.State:'', Validators.required],
      City: [this.dataById? this.dataById.City:'', Validators.required],
      MobileNo: [this.dataById? this.dataById.MobileNo:'', Validators.required,Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)],
      Email: [this.dataById? this.dataById.Email:'', Validators.required],
      Latitude: [this.dataById? this.dataById.Latitude:'', Validators.required],
      Longitude: [this.dataById? this.dataById.Longitude:'', Validators.required],
      currency: [this.dataById? this.dataById.currency:'', Validators.required],
    })
  }
  personDetails() {
    this.personForm = this.fb.group({
      name: ['',Validators.required],
      mobile:  ['',Validators.required],
      email: ['',Validators.required],
      Department:  ['',Validators.required],
      Designation: ['',Validators.required],
    })
  }

  showdetails(){
    this.show =this.fb.group({
      '':['']
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
  cancal(){
    this.router.navigateByUrl('/landing')
    
  }

  add(){
this.showdetails
  }

  back(){
    this.router.navigateByUrl('/dashbord')
  }
}