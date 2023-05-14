import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services';
import { CartService } from 'src/app/services/cart.service';
import { FilterPipe } from 'src/app/shared';

import { NextDirective } from 'src/app/shared/next.directive';
import { PrevDirective } from 'src/app/shared/prev.directive';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FilterPipe, NextDirective, PrevDirective,],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  searchKey: string = "";
  public page!: number;

  filterPost = '';
  productList: any;
  categoriesList: any;
  condition = 1;
  variableInterna: any[] = [];

  constructor(private dataService: DataService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getData();
    this.search();
    this.getAllCategories();
  }

  search() {
    this.dataService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  getData() {
    debugger;
    this.dataService.getData().subscribe((result: any) => {
      this.productList = result;
      console.log(result);
    });

  }


  getAllCategories() {
    debugger;
    this.dataService.getAllCategories().subscribe((result: any) => {
      this.categoriesList = result;
      console.log(result);
    });

  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }



}
