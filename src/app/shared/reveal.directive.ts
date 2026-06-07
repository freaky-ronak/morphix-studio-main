import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit {
  private el = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const node = this.el.nativeElement as HTMLElement;
    node.classList.add('fade-up');
    if (!('IntersectionObserver' in window)) { node.classList.add('in'); return; }
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      }
    }, { threshold: 0.12 });
    obs.observe(node);
  }
}
