import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { UiService } from './ui-service';
import { ThemeEnum } from '../../model/enum/theme.enum';

describe('UiService', () => {
  let service: UiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    const storageProto = Object.getPrototypeOf(window.localStorage) as Storage;
    vi.spyOn(storageProto, 'getItem').mockReturnValue(null);
    vi.spyOn(storageProto, 'setItem').mockImplementation(() => undefined);
    service = TestBed.inject(UiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('classNames', () => {
    it('includes base class and additional classes', () => {
      expect(service.classNames('base', {}, ['a', 'b'])).toBe('base a b');
    });

    it('includes modifier keys when value is truthy', () => {
      expect(service.classNames('base', { on: true, off: false, str: 'x' }, [])).toBe(
        'base on str',
      );
    });

    it('omits modifier keys when value is falsy', () => {
      expect(service.classNames('base', { a: false, b: 0 as unknown as boolean }, [])).toBe('base');
    });
  });

  describe('setTheme', () => {
    it('toggles from LIGHT to DARK and persists', () => {
      // default is 'light'
      service.setTheme();
      expect(service.getTheme()).toBe(ThemeEnum.DARK);
      expect(localStorage.setItem).toHaveBeenCalled();
    });

    it('toggles from DARK to LIGHT and persists', () => {
      (localStorage.getItem as unknown as ReturnType<typeof vi.fn>).mockReturnValueOnce(
        ThemeEnum.DARK,
      );
      const darkService = new UiService();

      darkService.setTheme();
      expect(darkService.getTheme()).toBe(ThemeEnum.LIGHT);
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });
});
