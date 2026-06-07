import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home), title: 'Morphix Studio — Home' },
  { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.Services), title: 'Services — Morphix Studio' },
  { path: 'packages', loadComponent: () => import('./pages/packages/packages').then(m => m.Packages), title: 'Packages — Morphix Studio' },
  { path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.Portfolio), title: 'Portfolio — Morphix Studio' },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About), title: 'About — Morphix Studio' },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact), title: 'Contact — Morphix Studio' },
  { path: '**', redirectTo: '' },
];
