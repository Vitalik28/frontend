import { ErrorHandler, Injectable, inject } from '@angular/core';

import { GlobalErrorStateService } from './global-error-state.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private readonly state = inject(GlobalErrorStateService);

  handleError(error: unknown): void {
    console.log(error);

    this.state.set(error);
    console.error(error);
  }
}
