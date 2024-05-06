import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() userData: any;
  @Output() showWelcome: EventEmitter<any> = new EventEmitter();
  @ViewChild('companyInput') companyInputEl: ElementRef | undefined;
  companyName: string = '';
  technology = '';

  constructor() { }

  ngOnInit(): void {
    // This method is called after the component is initialized
    // You can put initialization logic here
    console.log('Component initialized');
  }

  onWelcomeClick() {
    // for @output
    // this.showWelcome.emit(this.companyName);
    // for view child
    this.showWelcome.emit(this.companyInputEl?.nativeElement.value);
  }
}
