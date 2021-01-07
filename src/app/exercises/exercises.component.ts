import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  template: `
    <p>Input Field</p>
    <input type="text" class="form-control" [(ngModel)]="username" />
    <p>{{ username }}</p>
    <button
      class="btn btn-primary"
      [disabled]="username === ''"
      (click)="username = ''"
    >
      Reset user
    </button>
  `,
  styles: [
    `
      p {
        color: blue;
      }
    `,
  ],
})
export class ExercisesComponent implements OnInit {
  username = '';

  ngOnInit() {}
}
