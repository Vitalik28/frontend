import { Injectable, signal } from '@angular/core';
import { ThemeEnum } from '../../model/enum/ui.enum';

type Mods = Record<string, boolean | string>;

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private theme = signal<string>('light');

  constructor() {
    this.theme.set(localStorage.getItem('theme') ?? 'light');
  }

  public getTheme(): string {
    return this.theme();
  }

  public setTheme(): void {
    this.theme() === ThemeEnum.LIGHT
      ? this.theme.set(ThemeEnum.DARK)
      : this.theme.set(ThemeEnum.LIGHT);
    localStorage.setItem('theme', this.theme());
  }

  public classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
      cls,
      ...additional,
      ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className),
    ].join(' ');
  }
}
