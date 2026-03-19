import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiService } from 'shared/services/ui/ui-service';
import { ThemeSwitcherComponent } from 'shared/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-sidebar',
  imports: [ThemeSwitcherComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  uiService = inject(UiService);

  isShowSidebar = false;
}
