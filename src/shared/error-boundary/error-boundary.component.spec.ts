import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GlobalErrorStateService } from 'shared/services/error/global-error-state.service';
import { ErrorBoundaryComponent } from './error-boundary.component';

@Component({
  standalone: true,
  template: `
    <app-error-boundary>
      <p class="inner">OK</p>
    </app-error-boundary>
  `,
  imports: [ErrorBoundaryComponent],
})
class HostComponent {}

describe('ErrorBoundaryComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let state: GlobalErrorStateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    state = TestBed.inject(GlobalErrorStateService);
    fixture = TestBed.createComponent(HostComponent);
  });

  it('renders projected content when there is no error', async () => {
    state.clear();
    fixture.detectChanges();
    await fixture.whenStable();

    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.inner')?.textContent).toContain('OK');
    expect(el.querySelector('.error-boundary')).toBeFalsy();
  });

  it('renders fallback UI when an error is set', async () => {
    state.set(new Error('Boom'));
    fixture.detectChanges();
    await fixture.whenStable();

    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.error-boundary')).toBeTruthy();
    expect(el.textContent).toContain('Something went wrong');
  });

  it('reset clears error and shows content again', async () => {
    state.set(new Error('Boom'));
    fixture.detectChanges();
    await fixture.whenStable();

    const el = fixture.nativeElement as HTMLElement;
    (el.querySelector('button.retry') as HTMLButtonElement).click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(el.querySelector('.inner')?.textContent).toContain('OK');
    expect(el.querySelector('.error-boundary')).toBeFalsy();
  });

  it('errorMessage formats non-Error values', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const boundary = fixture.debugElement.query(By.directive(ErrorBoundaryComponent))
      .componentInstance as ErrorBoundaryComponent;

    expect(boundary.errorMessage('x')).toBe('x');
    expect(boundary.errorMessage({ a: 1 })).toBe('{"a":1}');

    const circular: Record<string, unknown> = {};
    circular['self'] = circular;
    expect(boundary.errorMessage(circular)).toBe('Unknown error');
  });

  it('errorMessage falls back to Error.name when message is empty', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const boundary = fixture.debugElement.query(By.directive(ErrorBoundaryComponent))
      .componentInstance as ErrorBoundaryComponent;

    const err = new Error('');
    err.name = 'CustomName';
    expect(boundary.errorMessage(err)).toBe('CustomName');
  });
});
