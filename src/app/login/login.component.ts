import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {useremail:'', password:'',remember:true}
  constructor(private dataService:DataService) { }

  ngOnInit() {

  }

  login(){
    let ecriptedPass: any = Md5.hashStr(this.user.password);
    this.user.password = ecriptedPass;
    let userInfo = this.user; 
    this.dataService.loginUser(userInfo);
  }
}
