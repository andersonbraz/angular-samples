import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  options: string[] = ['Angular', 'React', 'Vue'];

  objOptions = [
    { name: 'Angular' },
    { name: 'React' },
    { name: 'React Native' },
    { name: 'Vue' },
    { name: 'Javascript' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  displayFn(subject: { name: any; }){
    return subject ? subject.name : undefined;
  }

}
