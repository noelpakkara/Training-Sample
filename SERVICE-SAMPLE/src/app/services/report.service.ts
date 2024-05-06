import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  Url: string = 'https://dummyjson.com';
  jsonarray = 'assets/json/list.json';
  constructor(private http: HttpClient) {}
  public getProductDetails() {
    return this.http.get(this.jsonarray);
  }
  getTitle() {
    return 'Tech Shop';
  }
  addProduct(productDetails: any) {
    return this.http.post(this.Url + '/products/add', productDetails);
  }
  getProduct(productId: number) {
    return this.http.get(this.Url + '/products/' + productId);
  }
  updateProduct(productDetails: any) {
    return this.http.put(
      this.Url + '/products/' + productDetails.id,
      productDetails,
    );
  }
  deleteProduct(productId: number) {
    return this.http.delete(this.Url + '/products/' + productId);
  }
}
