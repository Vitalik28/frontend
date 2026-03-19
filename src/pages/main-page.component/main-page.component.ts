import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page.component',
  imports: [],

  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  crash(): never {
    throw new Error('ErrorBoundary test crash');
  }
}
