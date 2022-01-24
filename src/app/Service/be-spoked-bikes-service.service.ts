import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/Customer';
import { Product } from '../Models/Product';
import { sales } from '../Models/Sale';
import { SalesPerson } from '../Models/SalesPerson';
import { SalesPersonReport } from '../Models/SalesPersonReport';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class BeSpokedBikesServiceService {
 private http:HttpClient;
 private environmentService:EnvironmentService;
  constructor(
    http:HttpClient,
    environmentService:EnvironmentService)
    {
      this.http=http;
      this.environmentService=environmentService;
    }


 public getAllCustomers():Observable<Customer[]>
 {
   return this.http.get<Customer[]>(this.environmentService.getallCustomersUrl);
 }

 public getAllProducts():Observable<Product[]>
 {
   return this.http.get<Product[]>(this.environmentService.getAllProductsUrl);
 }
 public updateProductDetails(productData:Product)
 {
   return this.http.post(this.environmentService.updateProductDetailsUrl,productData,
    {
      headers:{
        'Content-Type':'application/json'
      }
    })
 }

 public updateSalesPersonDetails(salesPersonData:SalesPerson)
 {
   return this.http.post(this.environmentService.updateSalesPersonDetailsUrl,salesPersonData,
    {
      headers:{
        'Content-Type':'application/json'
      }
    })
 }


 public getAllSalesPersonReport(salesPersonId:number,quarter:number,year:number):Observable<SalesPersonReport[]>
 {
   return this.http.post<SalesPersonReport[]>(this.environmentService.getSalesPersonReportUrl,
    {
      params:{
        salesPersonId:salesPersonId.toString(),
        quarter:quarter.toString(),
        year:year.toString(),
      }

      
      
    });
 }
 public getAllSalesPersons():Observable<SalesPerson[]>
 {
   return this.http.get<SalesPerson[]>(this.environmentService.getAllSalesPersonsUrl);
 }
 public getAllSales():Observable<sales[]>
 {
   return this.http.get<sales[]>(this.environmentService.getAllSalesUrl);
 }
 public createSale(saleData:sales)
 {
   return this.http.post(this.environmentService.createSaleUrl,saleData,
    {
      headers:{
        'Content-Type':'application/json'
      }
    })
 }
}
