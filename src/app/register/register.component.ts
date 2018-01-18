import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {name:'',useremail:'',password:'',gender:'male',agree:true};
  constructor( 
    private dataService:DataService
  ) { }

  ngOnInit() {
    
  }

  register(){
    let ecriptedPass: any = Md5.hashStr(this.user.password);
    this.user.password =  ecriptedPass;
    let userData = this.user;
    this.dataService.registerUser(userData);
  }

}
