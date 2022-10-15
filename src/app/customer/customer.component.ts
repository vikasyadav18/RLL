import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  error='';
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }

  showLogin=false;
  openSignUp()
  {
    this.showLogin=false;
  }

  openLogin()
  {
    this.showLogin=true;
  }

  signUp(data:any)
  {
    // if(data.chk===true)
    // {
    //   this.error='';
    //   console.log("sign Up Successfully",data);
    //   this.service.customerSignUp(data);
    // }
    // else if(data.chk==='' && data.chk===false )
    // {
    //   this.error='please Accept the policy Agreement';
    // }
    
    this.service.customerSignUp(data);
    
  }

  signIn(data:any)
  {
    // if(data.chk===true)
    // {
    //   this.error='';
    //   console.log("sign In Successfully",data);
    //   this.service.customerSignIn(data);
    // }
    // else if(data.chk==='' && data.chk===false )
    // {
    //   this.error='please Accept the policy Agreement';
    // }
   
   this.service.customerSignIn(data);
   
  //  this.service.customerSignIn(data).subscribe((result)=>{
  //     console.log(result);
  //     alert("data inserted Sucessfully");  
  //   })

  
    
  }

}
