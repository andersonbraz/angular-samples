import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  constructor(private httpClient: HttpClient) {}

  getElements(): void {
    this.httpClient
      .get<Element[]>('assets/data/periodic-table.json')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
