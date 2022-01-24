import { Customer } from "./Customer";
import { Product } from "./Product";
import { SalesPerson } from "./SalesPerson";

export class sales{
    public saleId:number;
    public productId:number;
    public salesPersonId:number;
    public customerId:number;
    public price:number;
    public commission:number;
    public salesDate:Date;
    
    public customer :Customer;
    public salesPerson:SalesPerson;
    public product:Product;
  
    
}