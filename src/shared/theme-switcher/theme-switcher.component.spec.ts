import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { ThemeSwitcherComponent } from './theme-switcher.component';

describe('ThemeSwitcherComponent', () => {
  let component: ThemeSwitcherComponent;
  let fixture: ComponentFixture<ThemeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSwitcherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeSwitcherComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changeTheme delegates to UiService.setTheme()', () => {
    const spy = vi.spyOn(component.uiService, 'setTheme');
    component.changeTheme();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
