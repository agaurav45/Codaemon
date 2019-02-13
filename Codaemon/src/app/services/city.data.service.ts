import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()

export class CityDataService {
	
	baseUrl = "https://data.cityofnewyork.us/resource/5scm-b38n.json";
	
	constructor(private http:HttpClient) { 
	}							
	
	getCityData(fname, lname, callback){
		
		let param = new HttpParams()
		if(fname != '') param = param.set('first_name', fname);
		if(lname != '') param = param.set('last_name', lname);
		
		return this.http.get(this.baseUrl, { params: param }).subscribe(
		result => {
			callback(result);
		},
		error => {
			callback(error);
		},
		() => {

		});
    }	

}