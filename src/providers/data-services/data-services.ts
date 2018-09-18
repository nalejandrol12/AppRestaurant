import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServicesProvider {

  private _registerUrl = "https://app-restaurante.herokuapp.com/api/signup";
  private _loginUrl = "https://app-restaurante.herokuapp.com/api/signin";
  private _localUrl = "https://app-restaurante.herokuapp.com/api/local";
  private _productUrl = "https://app-restaurante.herokuapp.com/api/product/";
  private _comparationUrl = "https://app-restaurante.herokuapp.com/api/name/"
  private _comparation2Url = "https://app-restaurante.herokuapp.com/api/name2/"

  constructor(public http: HttpClient) {
    console.log('Hello DataServicesProvider Provider');
  }

  addCourses(course:string, course1:number, course2:number, course3:string, course4:string, course5:Boolean){
    const data = { name:course, cedula:course1, phone:course2, email:course3, password:course4, terms:course5}
    return this.http.post<any>(this._registerUrl, data)
  }

  addLogin(course:string, course1:string){
    const data = { email:course, password:course1}
    return this.http.post<any>(this._loginUrl, data)
  }

  getLocal(){
    return this.http.get<any>(this._localUrl);
  }

  getProduct(data:string){
    return this.http.get<any>(this._productUrl+data);
  }
  
  getComparation(data:string){
    return this.http.get<any>(this._comparationUrl+data);
  }

  getComparation2(data:string){
    return this.http.get<any>(this._comparation2Url+data);
  }

}
