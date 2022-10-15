import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  error='';
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
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
   
   this.service.managerSignIn(data);
    
  }

}
