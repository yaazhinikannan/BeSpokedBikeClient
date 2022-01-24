import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../Models/Customer';
import { Product } from '../Models/Product';
import { sales } from '../Models/Sale';
import { SalesPerson } from '../Models/SalesPerson';
import { SalesPersonReport } from '../Models/SalesPersonReport';
import { BeSpokedBikesServiceService } from '../Service/be-spoked-bikes-service.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  

  public mode:string;

  public yearList:number[];
  public quarter:any[];
  public selectedSalesPersonId:number;
  public selectedYear:number;
  public selectedQuarter:number;

  public saleList:sales[];
  public productList:Product[];
  public customerList:Customer[];
  public salesPersonList:SalesPerson[];
  public salesPersonReport:SalesPersonReport[];

  constructor(private service:BeSpokedBikesServiceService,private route: ActivatedRoute,private router:Router) { 

    this.yearList=[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2022]
    this.quarter =[{id:"Quarter1",value:1},{id:"Quarter2",value:2},{id:"Quarter3",value:3},{id:"Quarter4",value:4}]
  }

  ngOnInit(): void {
    
    if(this.route.snapshot.paramMap.get('mode')!=null && this.route.snapshot.paramMap.get('mode')!=undefined)
    {
    this.mode='';
    this.mode = this.route.snapshot.paramMap.get('mode');
    }
    else
    {
      this.mode='salesMode';
    }
    this.getSalesList();
    this.getProductList();
    this.getCustomerList();
    this.getSalesPersonList();
  }


  onSalesPersonSelection(event:any)
  {
    this.selectedSalesPersonId=event.target.value;
  }
  getSalesPersonList()
{
  this.service.getAllSalesPersons()
  .subscribe((res)=>
  {
    this.salesPersonList=res;
  },
  (error)=>{
    console.log(error);
  });
  
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
  getProductList()
  {
    this.service.getAllProducts()
    .subscribe((res)=>
      {
        this.productList=res;
      },
      
      (error)=>{
        console.log(error);
      });
    }
  getSalesList()
  {
    this.service.getAllSales()
    .subscribe((res)=>
    {
      this.saleList=res;
    },
    
    (error)=>{
      console.log(error);
    })
  }
  getSalesPersonReport()
  {
    this.service.getAllSalesPersonReport(this.selectedSalesPersonId,this.selectedQuarter,this.selectedYear)
    .subscribe((res)=>
    {
      this.salesPersonReport=res;
    },
    (error)=>{
      console.log(error);
    })
    
    
  }



  
}
