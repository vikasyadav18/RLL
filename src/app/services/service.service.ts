import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private router:Router,private http:HttpClient) { }

  ///////////////////////////// Customer SignIn And SignUp Api Calling///////////////////////////

  customerSignIn(data:any)
  {
    this.http.get(`http://localhost:3000/customerSignUp?email=${data.email}&password=${data.password}`,{observe:'response'})
    .subscribe((result:any)=>{
      console.log(result);
      if(result && result.body && result.body.length)
      {
        this.router.navigate(['customer-home']);
      }
      else
      {
        alert("Wrong Email Id Or Password");
        console.log("not logged succe");
      }
    })
  }
  customerSignUp(data:any)
  {
    this.http.post("http://localhost:3000/customerSignUp",data,{observe:"response"})
    .subscribe((result)=>{
      //console.log(result);
      alert("We Got Your data, Now You can Login With The Same Id & Password");
    })
  }

   ///////////////////////////// Engineer SignIn And SignUp Api Calling///////////////////////////

  EngineerSignIn(data:any)
  {
    this.http.get(`http://localhost:3000/EngineerSignUp?email=${data.email}&password=${data.password}`,{observe:'response'})
    .subscribe((result:any)=>{
      console.log(result);
      if(result && result.body && result.body.length)
      {
        this.router.navigate(['engineer-home']);
      }
      else
      {
        alert("Wrong Email Id Or Password");
        console.log("not logged succe");
      }
    })
  }
  EngineerSignUp(data:any)
  {
    this.http.post("http://localhost:3000/EngineerSignUp",data,{observe:"response"})
    .subscribe((result)=>{
     // console.log(result);
      alert("We Got Your data, Now You can Login With The Same Id & Password");
    })
  }

 ///////////////////////////// Admin SignIn Api Calling///////////////////////////

 adminSignIn(data:any)
 {
   this.http.get(`http://localhost:3000/adminSignIn?email=${data.email}&password=${data.password}`,{observe:'response'})
   .subscribe((result:any)=>{
     console.log(result);
     if(result && result.body && result.body.length)
     {
       this.router.navigate(['admin-home']);
     }
     else
     {
      alert("Wrong Email Id Or Password");
       console.log("not logged succe");
     }
   })
 }
 ///////////////////////////// Manager SignIn Api Calling///////////////////////////

 managerSignIn(data:any)
 {
   this.http.get(`http://localhost:3000/managerSignIn?email=${data.email}&password=${data.password}`,{observe:'response'})
   .subscribe((result:any)=>{
     console.log(result);
     if(result && result.body && result.body.length)
     {
       this.router.navigate(['manager-home']);
     }
     else
     {
      alert("Wrong Email Id Or Password");
       console.log("not logged succe");
     }
   })
 }

}
