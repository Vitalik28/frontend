import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandler } from './global-error-handler';
import { GlobalErrorStateService } from './global-error-state.service';

describe('GlobalErrorHandler', () => {
  let handler: GlobalErrorHandler;
  let state: GlobalErrorStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalErrorHandler],
    });
    handler = TestBed.inject(GlobalErrorHandler);
    state = TestBed.inject(GlobalErrorStateService);
  });

  it('stores handled error in GlobalErrorStateService', () => {
    const err = new Error('Test');
    handler.handleError(err);
    expect(state.error()).toBe(err);
  });
});

