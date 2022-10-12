import { Component, VERSION } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngOnChanges()';
  message = '';
  code = 0;
  name = '';
  customer: Customer = new Customer();

  updateMsg() {
    this.customer.name = this.name;
    this.customer.code = this.code;
    console.log(this.customer);
  }
}
