import { Routes } from '@angular/router';

import ErrorComponent from './error.component';

export const errorRoute: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    title: 'Greška!',
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      errorMessage: 'Nemate dozvolu za pristupanje ovoj stranici.',
    },
    title: 'Greška!',
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
      errorMessage: 'Stranica ne postoji.',
    },
    title: 'Greška!',
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
