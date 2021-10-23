import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.page.html',
  styleUrls: ['./greeting.page.scss'],
})
export class GreetingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  nextpage() {
    this.route.navigate(['/ourservices']);
  }

}
