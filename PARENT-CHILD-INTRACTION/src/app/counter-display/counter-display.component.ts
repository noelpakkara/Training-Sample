import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent {
  counter: number = 0;
  childMessage = '';
  message = '';

  constructor(private sharedService: SharedService) {
    this.sharedService.counter$.subscribe(value => {
      this.counter = value;
    });
  }

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(message => this.message = message);
  }

  increment() {
    this.sharedService.incrementCounter();
  }

  ngOnDestroy() {
    // this.counterSubscription.unsubscribe();
  }

  sendMessage() {
    this.sharedService.changeMessage(this.childMessage);
    this.childMessage = ''; // Clear the input field after sending the message
  }

}
