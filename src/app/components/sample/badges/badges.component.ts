import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {

  notifications = 2;
  errors = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
