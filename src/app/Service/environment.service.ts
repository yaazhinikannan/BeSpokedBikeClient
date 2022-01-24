import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

public get getallCustomersUrl():string{
  return environment.BeSpokedBikesURL +'Customer/GetAllCustomers'
}

public get getAllProductsUrl():string{
  return environment.BeSpokedBikesURL+'Product/GetAllProducts';
}

public get updateProductDetailsUrl():string{
    return environment.BeSpokedBikesURL+'Product/UpdateProductDetails';
}

public get getAllSalesUrl():string{
return environment.BeSpokedBikesURL+'Sale/GetAllSales';
}

public get createSaleUrl():string{
  return environment.BeSpokedBikesURL+'Sale/CreateSale';
 }

public get getAllSalesPersonsUrl():string{
  return environment.BeSpokedBikesURL+'SalesPerson/GetAllSalesPersons';
}
public get getSalesPersonReportUrl():string{
  return environment.BeSpokedBikesURL+'SalesPerson/GetSalesPersonReport';
}

public get updateSalesPersonDetailsUrl():string{
  return environment.BeSpokedBikesURL+'SalesPerson/UpdateSalesPersonDetails';
}
}
