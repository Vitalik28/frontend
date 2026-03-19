import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorBoundaryComponent } from 'shared/error-boundary/error-boundary.component';
import { UiService } from 'shared/services/ui/ui-service';
import { NavbarComponent } from 'widgets/navbar/navbar.component';
import { SidebarComponent } from 'widgets/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, ErrorBoundaryComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  uiService = inject(UiService);
}
