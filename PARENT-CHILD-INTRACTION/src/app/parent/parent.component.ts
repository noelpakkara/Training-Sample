import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  @ViewChild(ChildComponent) childComponent: ChildComponent | undefined;
  firstName: string = '';
  lastName: string = '';
  showWelcomeMessage: boolean = false;
  userDetails: any = {};
  company: any;

  ngOnInit(): void {
    // This method is called after the component is initialized
    // You can put initialization logic here
    console.log(this.childComponent?.companyName);
    
  }

  onButtonClick() {
    this.userDetails = {
      firstName: this.firstName,
      lastName: this.lastName
    };
  }

  displayWelcomeMessage(event: any) {
    this.showWelcomeMessage = true;
    // for view child
    this.company = this.childComponent?.companyName;
    //  for @output
    // alert("Welcome " + this.userDetails.firstName + " to " + event);
  }

  resetWelcomeMessage() {
    this.showWelcomeMessage = false;
  }
}
