import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="container cta">
        <div>
          <h3>Ready to take your brand to the next level?</h3>
          <p>Let’s Create Something Amazing Together!</p>
        </div>
        <a
  href="https://wa.me/917719759856?text=Hi%20Morphix%20Studio,%20I%20would%20like%20a%20quote%20for%20your%20services."
  target="_blank"
  class="btn btn-dark"
>
  Get a Free Quote →
</a>
      </div>
    </section>
  `,
  styles: [`
    .cta{background:linear-gradient(100deg,#FF4800,#ff7a3d);border-radius:var(--radius);
      padding:36px 44px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;color:#fff}
    .cta h3{font-size:1.5rem}
    .cta p{margin:6px 0 0;opacity:.92}
  `],
})
export class CtaBanner {}
