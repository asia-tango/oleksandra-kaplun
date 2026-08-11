import { DestroyRef, Directive, ElementRef, HostBinding, afterNextRender, inject, signal } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollReveal {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly visible = signal(false);

  @HostBinding('class.is-visible')
  get isVisible(): boolean {
    return this.visible();
  }

  constructor() {
    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        this.visible.set(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.visible.set(true);
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
      );

      observer.observe(this.el.nativeElement);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
