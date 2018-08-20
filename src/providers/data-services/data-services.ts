import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServicesProvider {

  private _registerUrl = "http://localhost:3001/api/signup";
  private _loginUrl = "http://localhost:3001/api/signin";
  private _localUrl = "http://localhost:3001/api/local"

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

}
