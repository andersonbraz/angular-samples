import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from '../dialog-message/dialog-message.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  
  openDialog(): void{
    let dialogRef = this.dialog.open(DialogMessageComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log("Result: " + result);
    });

  }
}
