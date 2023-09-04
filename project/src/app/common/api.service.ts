import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  id!: any;
  dataById: any;
  Name!: string;
  url = 'http://localhost:3000/';
  constructor(private Http: HttpClient) { }

  postApiCall(endpoint: string, formData: any) {
    let url = this.url + endpoint;
    return this.Http.post(url, formData);
  }

  getApiCall(endpoint: string, id?: number) {
    let url = id ? this.url + endpoint + '/' + id : this.url + endpoint;
    return this.Http.get(url);

  }
  patchApiCall(endPoint: any, data: any, id: number) {
    let url = this.url + endPoint + '/' + id;
    return this.Http.patch(url, data);
  }

  deletApiCall(endPoint: string, id: any) {
    let url = this.url + endPoint + '/' + id;
    return this.Http.delete(url);
  }

}
