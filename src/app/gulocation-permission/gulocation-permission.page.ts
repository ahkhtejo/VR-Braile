import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gulocation-permission',
  templateUrl: './gulocation-permission.page.html',
  styleUrls: ['./gulocation-permission.page.scss'],
})
export class GULocationPermissionPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  nextpage() {
    this.route.navigate(['/gunotification-permission']);
  }
}
