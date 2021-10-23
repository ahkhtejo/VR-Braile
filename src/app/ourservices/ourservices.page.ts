import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.page.html',
  styleUrls: ['./ourservices.page.scss'],
})
export class OurservicesPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  LearnBraille(){
  this.route.navigate(['/learn-braille']);
 }

}
