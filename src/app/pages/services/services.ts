import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { CtaBanner } from '../../core/components/cta-banner/cta-banner';
import { SERVICES } from '../../shared/data/content';

@Component({
  selector: 'app-services',
  imports: [RouterLink, RevealDirective, CtaBanner],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services { services = SERVICES; }
