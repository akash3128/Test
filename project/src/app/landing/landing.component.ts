import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  form!: FormGroup
  dataById: any;


  constructor(private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.FormDetails();

  }
  submit() {
    console.log('this.form', this.form.value);
  }

  FormDetails() {
    this.form = this.fb.group({
      GSTNo: ['', Validators.required],
      PANNo: ['', Validators.required],
      Code: ['', Validators.required],
      Name: ['', Validators.required],
      Address: ['', Validators.required],
      Pincode: ['', Validators.required],
      Country: ['', Validators.required],
      State: ['', Validators.required],
      City: ['', Validators.required],
      MobileNo: ['', Validators.required],
      Email: ['', Validators.required],
      Latitude: ['', Validators.required],
      Longitude: ['', Validators.required],
      currency: ['', Validators.required],
    })
  }

  button() {
    this.router.navigateByUrl('/home')
  }
}