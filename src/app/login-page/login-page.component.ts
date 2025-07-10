import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private r:Router){}
  user:any={
    username:"",
    password:""
  }
  users:any=[{
    username:'admin',
    password:'adm123'
  }];
  reqpad:any;
  checkLogin(form:any){
    console.log(this.user);
    console.log(form.values);
    this.reqpad=this.user.username.slice(0,3)+"123";
    if(this.user.username=='admin' && this.user.password=='adm123'){
    this.r.navigateByUrl("/userdetails");
 }
     else if(this.user.password==this.reqpad ){
        //  alert("Successfully");

         this.r.navigateByUrl("/nav/home");
         
     }
     else{
      alert("Login Failed");
     }
    
    
   

  }
  addUser(form:any){
    console.log(form.values);

    
    this.users.push(this.user);
    console.log(this.users);
   this.user={
    username:"",
    password:""
  }

     }
    
  
}
