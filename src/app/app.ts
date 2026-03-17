import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { UiService } from './services/ui/ui-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  uiService = inject(UiService);

  changeTheme(): void {
    this.uiService.setTheme();
  }

}
