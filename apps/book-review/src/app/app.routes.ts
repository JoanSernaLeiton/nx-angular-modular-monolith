import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    loadComponent: () =>
      import('@devfest/core-auth').then((x) => x.SignInComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((x) => x.HomeComponent),
  },
];
