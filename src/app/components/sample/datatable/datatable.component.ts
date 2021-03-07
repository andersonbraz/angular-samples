import { DataSource } from '@angular/cdk/collections';
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

  displayedColumns: string[] = [
    'position',
    'name',
    'atomic_mass',
    'symbol',
    'phase',
    'density',
    'discovered_by',
  ];

  constructor(private elementService: ElementService) {}
  dataSource: MatTableDataSource<Element>;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit(): void {
    this.elementService.getElements().subscribe((elements) => {
      this.elements = elements;
      this.dataSource = new MatTableDataSource(this.elements);
      this.dataSource.sort = this.sort;
    });
  }

  logData(row: object): void {
    console.log(row);
  }
}
