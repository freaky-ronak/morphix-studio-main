import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { CtaBanner } from '../../core/components/cta-banner/cta-banner';
import { PACKAGES, EXTRAS } from '../../shared/data/content';

@Component({
  selector: 'app-packages',
  imports: [RouterLink, RevealDirective, CtaBanner],
  templateUrl: './packages.html',
  styleUrl: './packages.css',
})
export class Packages { packages = PACKAGES; extras = EXTRAS; }
