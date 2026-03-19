import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalErrorStateService {
  readonly error = signal<unknown | null>(null);

  set(error: unknown) {
    this.error.set(error);
  }

  clear() {
    this.error.set(null);
  }
}

