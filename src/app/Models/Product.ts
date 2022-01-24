import { NumberFilterModel } from "ag-grid-community";


export class Product
{
    public productId :number;
    public productName:string;
    public manufacturer:string;
    public style :string;
    public purchasePrice:number;
    public salePrice :number;
    public afterDiscountPrice:number;
    public productDiscount:number;
    public qtyOnHand:number;
    public commissionPercentage:number;

}