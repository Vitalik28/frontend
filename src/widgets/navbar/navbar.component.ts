import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiService } from 'shared/services/ui/ui-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  uiService = inject(UiService);
}
