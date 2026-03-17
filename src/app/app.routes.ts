import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page.component/main-page.component';
import { AboutPageComponent } from './pages/about-page.component/about-page.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
];
