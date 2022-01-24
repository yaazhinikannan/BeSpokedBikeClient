import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/Product';
import { BeSpokedBikesServiceService } from '../Service/be-spoked-bikes-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productList:Product[];
id:number;
productTobeSaved:Product;
  constructor(private service:BeSpokedBikesServiceService,
    private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.id = +this.route.snapshot.paramMap.get('id');
    this.getProductList();
    //this.productTobeSaved = this.productList.find(t=>t.productId==prod);
  }
  getProductList()
  {
    this.service.getAllProducts()
    .subscribe((res)=>
      {
        this.productList=res;
        this.productTobeSaved = this.productList.find(t=>t.productId==this.id);
      },
      
      (error)=>{
        console.log(error);
      });
    

  }
  saveProduct()
  {
    this.service.updateProductDetails(this.productTobeSaved)
    .subscribe((res)=>
    {
      alert("Product Updated");
      this.router.navigateByUrl('/products/prodMode');

    },
    (error)=>{
      console.log(error);
    });
  }
}
