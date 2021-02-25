import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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

  myControl = new FormControl();
  filterOptions: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {

    this.filterOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  displayFn(subject: { name: any; }){
    return subject ? subject.name : undefined;
  }

  private _filter(value: string): string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
