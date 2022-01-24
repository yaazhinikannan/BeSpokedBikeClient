import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../Models/Customer';
import { Product } from '../Models/Product';
import { sales } from '../Models/Sale';
import { SalesPerson } from '../Models/SalesPerson';
import { BeSpokedBikesServiceService } from '../Service/be-spoked-bikes-service.service';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})
export class CreateSaleComponent implements OnInit {
 sale :sales;
 customerList:Customer[];
 productList:Product[];
 productSalesPrice:number;
 productAfterDiscounePrice:number;
 productPurchasePrice:number;
 productDiscount:number;
 salesCommissionPercentage:number;
 salesCommissionValue:number;
 salesPersonList:SalesPerson[];
 showProdRelatedData:boolean=false;
 showSalesPersonRelatedData:boolean=false;
 today:any;
  constructor(
    private service:BeSpokedBikesServiceService,
    private router:Router)
    {
    }

  ngOnInit(): void {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
     this.today = now.getFullYear() + "-" + (month) + "-" + (day);
    
     this.getCustomerList();
     this.getProductList();
     this.getSalesPersonList();
    this.sale=new sales();
  }
  onProductSelection(event:any)
  {
    console.log(event.target.value);
    
    var product = this.productList.find(x=>x.productId==Number(event.target.value));
    console.log(product);
    
    this.showProdRelatedData=true;
    this.productSalesPrice =product.salePrice;
    this.productDiscount = product.productDiscount;
    this.productAfterDiscounePrice =product.afterDiscountPrice;
   this.productAfterDiscounePrice= this.calculateProductDiscountValue();
   this.productPurchasePrice =product.purchasePrice;
   this.salesCommissionPercentage=product.commissionPercentage;
   
  }
  onSalesPersonSelection(event:any)
  {
    this.showSalesPersonRelatedData=true;
    this.salesCommissionValue=this.calculateSalesCommisionValue();
  }
  calculateProductDiscountValue():number
  {
     return this.productSalesPrice - (this.productDiscount/100)*this.productSalesPrice;
  }
  calculateSalesCommisionValue():number
  {
      return this.salesCommissionPercentage/100*(this.productAfterDiscounePrice-this.productPurchasePrice);
  }
  createSale()
  {
    //this.sale.salesDate=this.today;

    if(this.sale.productId!=null && this.sale.productId!=undefined &&
       this.sale.salesPersonId!=null && this.sale.salesPersonId!=undefined &&
       this.sale.salesDate!=null && this.sale.salesDate!=undefined &&
       this.sale.customerId!=null && this.sale.customerId !=undefined
      )
    {
      
    
    this.sale.price=this.productSalesPrice;
    this.sale.commission=this.salesCommissionPercentage;
    this.service.createSale(this.sale)
    .subscribe((res)=>
    {
      alert("Sale Created");
      this.router.navigateByUrl('/');
    })
  }
  else{
    alert("Please fill all fields");
  }
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
}


