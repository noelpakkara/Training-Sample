import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  productDetails: any[] = [];
  newProductDetail: any = {};
  isEdit: boolean = false;
  title: string = '';
  constructor(private reportService: ReportService) {}
  ngOnInit() {
    this.getDetails();
    this.title = this.reportService.getTitle();
  }
  getDetails() {
    this.reportService.getProductDetails().subscribe((data: any) => {
      this.productDetails = data;
      console.log('billingDetails', this.productDetails);
    });
  }
  onSubmit() {
    if (this.isEdit == false) {
      this.reportService.addProduct(this.newProductDetail).subscribe(
        (data: any) => {
          this.productDetails.push(this.newProductDetail);
          this.isEdit = false;
        },
        (error) => {
          console.error('Error adding product:', error);
        },
      );
    } else {
      const index = this.productDetails.findIndex(
        (item) => item.id === this.newProductDetail.id,
      );

      // Replace the item with new data if found
      if (index !== -1) {
        this.productDetails[index] = this.newProductDetail;
      }
      this.reportService
        .updateProduct(this.newProductDetail)
        .subscribe((data: any) => {
          this.isEdit = false;
        });
    }
  }
  onEdit(productId: number) {
    this.isEdit = true;
    this.newProductDetail.id = productId;
    this.reportService.getProduct(productId).subscribe((response: any) => {
      this.newProductDetail = response;
      console.log('getProduct', response);
    });
  }
  onDelete(productId: number) {
    this.reportService.deleteProduct(productId).subscribe((data: any) => {
      this.productDetails = this.productDetails.filter(
        (x) => x.id != productId,
      );
    });
  }
}
