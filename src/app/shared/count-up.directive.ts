import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

@Directive({ selector: '[appCountUp]' })
export class CountUpDirective implements OnInit {
  @Input('appCountUp') target = '';
  private el = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const node = this.el.nativeElement as HTMLElement;
    const match = this.target.match(/^(\d+)(.*)$/);
    if (!match) { node.textContent = this.target; return; }
    const end = parseInt(match[1], 10);
    const suffix = match[2] || '';
    node.textContent = '0' + suffix;
    if (!('IntersectionObserver' in window)) { node.textContent = this.target; return; }
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        obs.unobserve(e.target);
        const dur = 1400; const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          node.textContent = Math.round(end * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(node);
  }
}
