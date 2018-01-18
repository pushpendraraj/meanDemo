import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Injectable()
export class DataService {
  constructor(
    private http:HttpClient, 
    private _flashMessagesService: FlashMessagesService, 
    private router:Router 
  ) { }

  setLocalStorage(key,data){
    localStorage.setItem(key, data);
  }

  getLocalStorageData(key) {
    return localStorage.getItem(key);
  }

  clearLocalStorageData() {
    localStorage.clear();
    return;
  }

  registerUser(userData){
    this.http.post('/user',userData).subscribe(res=>{  
      this.router.navigate(['/login']);
      this._flashMessagesService.show('Thanks for register, login now !', { cssClass: 'alert-success', timeout: 2000 });
    },
    (err)=>{
      this._flashMessagesService.show('Sorry not registered, please try again !', { cssClass: 'alert-danger', timeout: 2000 });
    });
  }

  loginUser(userData){
    this.http.post('/user/login-user',userData).subscribe(res=>{
      if(res!=null){
        this.setLocalStorage('__loggedUserInfo',res);    
        this.setLocalStorage('__isUserLoggedIn',true);
        this.router.navigate(['/dashboard']);
        this._flashMessagesService.show('Welcome to dashboard !', { cssClass: 'alert-success', timeout: 2000 });
      }else
      this._flashMessagesService.show('Sorry invalid username or password !', { cssClass: 'alert-danger', timeout: 2000 });
    },(err)=>{
      this._flashMessagesService.show('Sorry invalid username or password !', { cssClass: 'alert-danger', timeout: 2000 });
    });
  }

}
