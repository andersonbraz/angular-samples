import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ElementService } from './element/element.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {

  ELEMENT_DATA: Element[] = [];

  displayedColumns: string[] = ['position', 'name', 'atomic_mass', 'symbol'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.elementService.getElements();
  }

  logData(row: object): void {
    console.log(row);
  }

  applyFilter(text: string): void {
    this.dataSource.filter = text.trim().toLowerCase();
  }

}
