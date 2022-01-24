import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Output() mode = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToSaleCreation()
  {
    
    this.router.navigateByUrl('/createSale');
    
  }
}
