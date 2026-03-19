import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () =>
      import('pages/main-page.component/main-page.component').then((m) => m.MainPageComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('pages/about-page.component/about-page.component').then((m) => m.AboutPageComponent),
  },
  {
    path: '**',

    redirectTo: 'main',
  },
];
