import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { CountUpDirective } from '../../shared/count-up.directive';
import { CtaBanner } from '../../core/components/cta-banner/cta-banner';
import { PACKAGES, EXTRAS, STATS, BRANDS, HERO_BADGES, FEATURED_CONTENT } from '../../shared/data/content';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RevealDirective, CountUpDirective, CtaBanner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  packages = PACKAGES;
  extras = EXTRAS;
  stats = STATS;
  brands = BRANDS;
  badges = HERO_BADGES;
  aboutList = ['Motion Graphics','Video Editing','Brand Promos','Graphic Design','Social Media Content'];
  portfolioUrl = FEATURED_CONTENT.videoEditorPortfolio;
}
