import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  constructor(private snackbar: MatSnackBar) {}

  ngOnInit(): void {}

  openSnackMessage(message: string, action: string): void {
    let snackBarRef = this.snackbar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('Here Dismissed!');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('Here Action!');
    });
  }
}
