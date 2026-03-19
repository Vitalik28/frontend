import { ErrorHandler, Injectable, inject } from '@angular/core';

import { BoundaryStateService } from './boundary-state.service';

@Injectable()
export class BoundaryErrorHandler implements ErrorHandler {
  private readonly state = inject(BoundaryStateService);
  private readonly parent = inject(ErrorHandler, { optional: true, skipSelf: true });

  handleError(error: unknown): void {
    this.state.setError(error);
    this.parent?.handleError(error);
  }
}
