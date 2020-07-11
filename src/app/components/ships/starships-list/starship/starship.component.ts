import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<StarshipComponent>) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  close(): void {
    this.dialogRef.close();
  }

}
