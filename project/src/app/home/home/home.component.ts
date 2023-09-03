import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/common/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  

  public fDetails: any=[];
  public Name!: string;

  public formlDetails: any[] = []
  public showTable: any;
  public dataById:any;
  
   constructor(private router: Router, private apiservices:APIService
     ) { }
  
   ngOnInit() {
     console.log('oninit calling...');
   
    this.Name = 'akash'
   
   }
 
  
   async Details() {
     this.showTable = !this.showTable;
    let endPoint = 'form';

     this.fDetails = await this.apiservices.getApiCall(endPoint).toPromise()
     console.log('formdetails', this.fDetails);
     this.formlDetails = []
     
   }
  
   async deleteRecord(id:number){
     await this.apiservices.deletApiCall('form', id).toPromise();
   }
  
  
   async edit(id:number){
     this.apiservices.id = id;
     this.dataById = await this.apiservices.getApiCall('form', id).toPromise();
     this.apiservices.dataById = this.dataById;
     
     this.router.navigateByUrl('/landing')
   }
}