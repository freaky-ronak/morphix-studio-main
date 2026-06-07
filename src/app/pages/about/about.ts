import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { CountUpDirective } from '../../shared/count-up.directive';
import { CtaBanner } from '../../core/components/cta-banner/cta-banner';

@Component({
  selector: 'app-about',
  imports: [RevealDirective, CountUpDirective, CtaBanner],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  stats = [
    { n: '150+', l: 'Happy Clients' },
    { n: '500+', l: 'Projects Completed' },
    { n: '7+', l: 'Years Experience' },
    { n: '98%', l: 'Client Satisfaction' },
  ];
  values = [
    { t: 'Creativity First', d: 'Every project starts with a bold idea and trend-aware thinking.' },
    { t: 'Brand Strategy', d: 'We align visuals with your brand identity and business goals.' },
    { t: 'Quality Delivery', d: 'High-quality output delivered fast, every single time.' },
  ];
}
