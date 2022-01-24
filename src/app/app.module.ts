import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesPersonComponent } from './sales-person/sales-person.component';
import { SalesComponent } from './sales/sales.component';
import { ProductsComponent } from './products/products.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GridComponent } from './grid/grid.component';
import { CreateSaleComponent } from './create-sale/create-sale.component';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SalesPersonComponent,
    SalesComponent,
    ProductsComponent,
    CustomerComponent,
    DashboardComponent,
    HeaderComponent,
    GridComponent,
    CreateSaleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgGridModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path:'',component:GridComponent,pathMatch:'full'
        },
        {
          path:'createSale',component:CreateSaleComponent,pathMatch:'full'
        },
        {
          path:'sales/:mode',component:GridComponent,pathMatch:'full'
        },
        {
          path:'products/:mode',component:GridComponent,pathMatch:'full'
        },
        {
          path:'customers/:mode',component:GridComponent,pathMatch:'full'
        },
        {
          path:'salesPerson/:mode',component:GridComponent,pathMatch:'full'
        },
        {
          path:'salesPersonReport/:mode',component:GridComponent,pathMatch:'full'
        },
        {
          path:'editProduct/:id',component:ProductsComponent,pathMatch:'full'
        },
        {
          path:'editSalesPersons/:id',component:SalesPersonComponent,pathMatch:'full'
        }
      
        

      ]
    )
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
