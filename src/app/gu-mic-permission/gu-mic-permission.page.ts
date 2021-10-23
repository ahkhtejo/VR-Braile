import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gu-mic-permission',
  templateUrl: './gu-mic-permission.page.html',
  styleUrls: ['./gu-mic-permission.page.scss'],
})
export class GuMICPermissionPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  nextpage() {
    this.route.navigate(['/greeting']);
  }
}
