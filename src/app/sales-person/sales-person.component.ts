import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesPerson } from '../Models/SalesPerson';
import { BeSpokedBikesServiceService } from '../Service/be-spoked-bikes-service.service';

@Component({
  selector: 'app-sales-person',
  templateUrl: './sales-person.component.html',
  styleUrls: ['./sales-person.component.css']
})
export class SalesPersonComponent implements OnInit {
  id:number;
  today :any;
salesPersonTobeSaved:SalesPerson;
salesPersonList:SalesPerson[];
  constructor(private service:BeSpokedBikesServiceService,
    private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    this.today = now.getFullYear() + "-" + (month) + "-" + (day);
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getSalesPersonList();
  }
getSalesPersonList()
{
  this.service.getAllSalesPersons()
  .subscribe((res)=>
  {
    this.salesPersonList=res;
    this.salesPersonTobeSaved=this.salesPersonList.find(t=>t.salesPersonId==this.id)
  },
  (error)=>{
    console.log(error);
  });
  
}
saveSalesPerson()
{
 this.service.updateSalesPersonDetails(this.salesPersonTobeSaved)
 .subscribe((res)=>
 {
   alert("Sales Person Updated");
   this.router.navigateByUrl('/salesPerson/spMode');
 },
 (error)=>{
  console.log(error);
});
 
}
}
