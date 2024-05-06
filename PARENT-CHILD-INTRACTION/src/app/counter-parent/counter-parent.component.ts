import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent {
  counter = 0;
  message = '';


  constructor(private sharedService: SharedService) {
   
    
  }

  ngOnInit() {
    this.sharedService.counter$.subscribe(value => {
      this.counter = value;
    });

    this.sharedService.currentMessage.subscribe(message => this.message = message);
  }

  sendMessage() {
    this.sharedService.changeMessage(this.message);
  }

  increment() {
    this.sharedService.incrementCounter();
  }

  decrement() {
    this.sharedService.decrementCounter();
  }

}
