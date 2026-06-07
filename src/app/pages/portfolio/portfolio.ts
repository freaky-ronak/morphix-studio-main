import { Component, signal, computed } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { CtaBanner } from '../../core/components/cta-banner/cta-banner';
import { WORKS, Work } from '../../shared/data/content';

@Component({
  selector: 'app-portfolio',
  imports: [RevealDirective, CtaBanner],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  private all = WORKS;
  categories = ['All', 'Promos', 'Reels', 'Motion Graphics', 'Design'];
  active = signal('All');

  works = computed<Work[]>(() =>
    this.active() === 'All' ? this.all : this.all.filter(w => w.category === this.active())
  );

  setFilter(c: string) { this.active.set(c); }
}
