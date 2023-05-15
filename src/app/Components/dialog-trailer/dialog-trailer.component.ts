import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-trailer',
  templateUrl: './dialog-trailer.component.html',
  styleUrls: ['./dialog-trailer.component.css']
})
export class DialogTrailerComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogTrailerComponent>
  ) { }

  closeModal(): void {
    this.dialogRef.close();
  }
}
