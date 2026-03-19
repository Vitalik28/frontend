import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits buttonClick when onClickHandler is called', () => {
    const event = new MouseEvent('click');
    const spy = vi.fn();
    component.buttonClick.subscribe(spy);

    component.onClickHandler(event);

    expect(spy).toHaveBeenCalledWith(event);
  });

  it('renders label in button', () => {
    component.label = 'Submit';
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button');
    expect(btn?.textContent?.trim()).toContain('Submit');
  });

  it('sets disabled attribute when disabled input is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button');
    expect(btn?.disabled).toBe(true);
  });

  it('shows spinner when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();
    const spinner = fixture.nativeElement.querySelector('app-spinner');
    expect(spinner).toBeTruthy();
  });

  it('emits buttonClick when button is clicked', () => {
    const spy = vi.fn();
    component.buttonClick.subscribe(spy);
    fixture.detectChanges();

    const btn = fixture.nativeElement.querySelector('button');
    btn?.click();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
