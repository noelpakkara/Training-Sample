import { Component } from '@angular/core';
import { ReportService } from '../services/report.service';
@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  styleUrls: ['./app.topbar.component.scss'],
})
export class AppTopBarComponent {
  title: string = '';

  constructor(private reportService: ReportService) {}
  ngOnInit() {
    this.title = this.reportService.getTitle();
  }
}
