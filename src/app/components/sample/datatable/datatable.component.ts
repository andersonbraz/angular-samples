import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ElementService } from './element/element.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {
  elements: Element[] = [];
  displayedColumns: string[] = ['position', 'name', 'atomic_mass', 'symbol'];

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.getElements().subscribe((elements) => {
      this.elements = elements;
      console.log(elements);
    });
  }

  logData(row: object): void {
    console.log(row);
  }

}
