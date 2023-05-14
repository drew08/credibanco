import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class CartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor(private toastr: ToastrService,) { }
  getProducts() {
    debugger;
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    debugger;
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    debugger;
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    debugger;
    this.toastr.success('add to cart successfully', 'OK', {
      positionClass: 'toast-bottom-right',
      timeOut: 1000
   });
    console.log(this.cartItemList)
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);

  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}
