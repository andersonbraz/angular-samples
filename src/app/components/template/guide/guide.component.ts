import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
})
export class GuideComponent implements OnInit {
  list = [
    { icon: 'home', text: 'Home', link: '/' },
    { icon: 'design_services', text: 'Typography', link: '/typography' },
    { icon: 'filter_none', text: 'Button', link: '/buttons' },
    { icon: 'filter_center_focus', text: 'Icons', link: '/icons' },
    { icon: 'favorite', text: 'Cards', link: '/cards' },
    { icon: 'list', text: 'Sidenav', link: '/sidenav' },
    { icon: 'table_view', text: 'Datatable', link: '/data-table' },
    { icon: '', text: '', link: '' },
    { icon: '', text: '', link: '' },
    { icon: '', text: '', link: '' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
