import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'child-component',
  template: `<h1>After changes !</h1>
              <p>Message: {{message}} </p>
              <p>Customer: {{customer.name}} </p>
              <p>Code: {{customer.code}} </p>
              <ul><li *ngFor="let log of changelog;"> {{ log }}</li></ul>`,
})
export class ChildComponent implements OnChanges, OnInit {
  @Input() message: string;
  @Input() customer: Customer;
  @Input() code: Customer;
  changelog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const change = changes[propName];
      const to = JSON.stringify(change.currentValue);
      const from = JSON.stringify(change.previousValue);
      const changeLog = `${propName}: changed from ${from} to ${to} `;
      this.changelog.push(changeLog);
    }
  }
  ngOnInit() {
    console.log('success');
  }
}
