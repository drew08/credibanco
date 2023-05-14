
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from 'src/app/services';
import { CartService } from 'src/app/services/cart.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  public totalCount : number = 0;
  public searchTerm : string = '';
  isMenuVisible = true;
  constructor (private dataService : DataService, private cartService:CartService, private route: Router){}

  ngDoCheck(): void {
    let currentroute = this.route.url;
    debugger;
    if (currentroute == '/home' || currentroute == "/") {
      this.isMenuVisible = true
    } else {
      this.isMenuVisible = false
    }
  }
 
  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      debugger;
        this.totalCount = res.length;
        console.log(this.totalCount);
    })

  }

  

  search(event:any){

    this.searchTerm = (event.target as HTMLInputElement).value;
    this.dataService.search.next (this.searchTerm);
    console.log(this.searchTerm);
  }

}
