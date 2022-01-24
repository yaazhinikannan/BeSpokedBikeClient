import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Models/Customer';
import { BeSpokedBikesServiceService } from '../Service/be-spoked-bikes-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customerList:Customer[];
  constructor(private service:BeSpokedBikesServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getCustomerList();
  }
  getCustomerList()
  {
    this.service.getAllCustomers()
    .subscribe((res)=>
      {
        this.customerList=res;
      },
      
      (error)=>{
        console.log(error);
      });
    }
}
