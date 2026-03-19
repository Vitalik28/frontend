import { Injectable, signal } from '@angular/core';

@Injectable()
export class BoundaryStateService {
  readonly error = signal<unknown | null>(null);

  setError(error: unknown) {
    this.error.set(error);
  }

  clear() {
    this.error.set(null);
  }
}
