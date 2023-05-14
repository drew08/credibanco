import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  baseURL: string = "https://fakestoreapi.com/products";

  public search = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }


  getData() {
    debugger;
    return this.http.get(`${this.baseURL}?sort=asc`);
  }


  getDataByID(id: string) {
    debugger;
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getAllCategories() {
    debugger;
    return this.http.get(`${this.baseURL}/categories`);
  }


  getProductsInCategory(categori: string) {
    debugger;
    return this.http.get(`${this.baseURL}/category/${categori}`);
  }



}


