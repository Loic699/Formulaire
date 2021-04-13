import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})



export class SignUpComponent implements OnInit {
  model: Order = new Order();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    // form submitted
    console.log(this.model);
  }
}
export class Order {
  title: string;
  quantity: number;
  date: Date;
  contact: string;
  email: string;
  MDP: string;
}