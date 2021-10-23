import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gunotification-permission',
  templateUrl: './gunotification-permission.page.html',
  styleUrls: ['./gunotification-permission.page.scss'],
})
export class GunotificationPermissionPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  nextpage() {
    this.route.navigate(['/gu-mic-permission']);
  }

}
