import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  // <button
  //     class="btn btn-primary"
  //     (click)="showSecret = !showSecret"
  //   >
  //     Display Details
  //   </button>
  template: `
    <button class="btn btn-primary" (click)="onToggleDetails()">
      Display Details
    </button>
    <p *ngIf="showSecret">This is a cute paragraph</p>
    <div
      *ngFor="let logItem of log"
      [ngStyle]="{ backgroundColor: logItem >= 5 ? 'blue' : 'transparent' }"
      [ngClass]="{ white: logItem >= 5 }"
    >
      {{ logItem }}
    </div>
  `,
  styles: [
    `
      .white {
        color: white;
      }
    `,
  ],
})
export class ExercisesComponent implements OnInit {
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  ngOnInit() {}
}
