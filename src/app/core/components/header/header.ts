import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  open = signal(false);
  links = [
    { path: '/', label: 'Home', exact: true },
    { path: '/services', label: 'Services', exact: false },
    { path: '/packages', label: 'Packages', exact: false },
    { path: '/portfolio', label: 'Portfolio', exact: false },
    { path: '/about', label: 'About Us', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];
  toggle() { this.open.update(v => !v); }
  close() { this.open.set(false); }
}
