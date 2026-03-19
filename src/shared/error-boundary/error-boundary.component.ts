import { Component, inject } from '@angular/core';

import { GlobalErrorStateService } from 'shared/services/error/global-error-state.service';

@Component({
  selector: 'app-error-boundary',
  standalone: true,
  templateUrl: './error-boundary.component.html',
  styleUrl: './error-boundary.component.scss',
})
export class ErrorBoundaryComponent {
  private readonly state = inject(GlobalErrorStateService);

  readonly error = this.state.error;

  reset() {
    this.state.clear();
  }

  errorMessage(err: unknown): string {
    if (err instanceof Error) return err.message || err.name;
    if (typeof err === 'string') return err;
    try {
      return JSON.stringify(err);
    } catch {
      return 'Unknown error';
    }
  }
}
