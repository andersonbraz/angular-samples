import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgeComponent implements OnInit {

  notifications = 2;
  errors = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
