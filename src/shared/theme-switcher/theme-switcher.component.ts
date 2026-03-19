import { Component } from '@angular/core';
import { ButtonComponent } from 'shared/button/button.component';

@Component({
  selector: 'app-theme-switcher',
  imports: [ButtonComponent],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent extends ButtonComponent {
  changeTheme(): void {
    this.uiService.setTheme();
  }
}
