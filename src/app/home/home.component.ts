import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	src = "assets/ink.webm";
	homeData = {};
	aboutData = {};
	storeVar = '';
  	constructor(private http: HttpClient) { }

  	ngOnInit() {
		this.getPageDetailBySlug('home');
		this.getPageDetailBySlug('about-us');
	}
	  
  	getPageDetailBySlug(Slug) {
		switch(Slug){
			case 'home':
				this.http.get('/page/'+Slug).subscribe(data => {
					this.homeData = data;
				});
				break;

			case 'about-us':
				this.http.get('/page/'+Slug).subscribe(data => {
					this.aboutData = data;
				});
				break;
		}
    
  	}
}
