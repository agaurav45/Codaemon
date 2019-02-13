import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { CityDataService } from '../services/city.data.service';

@Component({
	selector: 'city-data',
	templateUrl: './city.data.component.html',
	styleUrls: ['./city.data.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class CityDataComponent {
	
	public cityData:any = [];
	public firstName:string = '';
	public lastName:string = '';
	public showProgressBar:boolean = false;
	public showData:boolean = false;
	public barWidth:number = 0;
	
	constructor(public _cityService: CityDataService) { }

	ngOnInit() {
		this.getData();
	}
	
	getData() {		
		this.showProgressBar = true;
		this.showData = false;
		this.barWidth = 0;
		let ths = this;
		         
		this._cityService.getCityData(this.firstName, this.lastName, (result) => {
			this.cityData = result;
			let timer = setInterval(function () {
				ths.barWidth = ths.barWidth + 1;
				if(ths.barWidth >= 100 && ths.cityData) {
					ths.showProgressBar = false;
					ths.showData = true;
					clearInterval(timer);
				}
			}, 100);
		});
	}
		
}
