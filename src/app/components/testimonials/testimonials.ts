import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n';
import { ScrollReveal } from '../../core/scroll-reveal/scroll-reveal';

interface Testimonial {
  src: string;
  width: number;
  height: number;
  alt: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [ScrollReveal, NgOptimizedImage],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {
  protected readonly i18n = inject(I18nService);

  protected readonly testimonials: Testimonial[] = [
    {
      src: '/images/testimonials/testimonial-1-giorgi.png',
      width: 1151,
      height: 332,
      alt: 'Рекомендація від Giorgi Merabishvili, Senior Software Engineer',
    },
    {
      src: '/images/testimonials/testimonial-2-olga.png',
      width: 1151,
      height: 653,
      alt: 'Рекомендація від Ольги Мельнічук, QA Engineer',
    },
    {
      src: '/images/testimonials/testimonial-3-diego.png',
      width: 1151,
      height: 544,
      alt: 'Рекомендація від Diego Garcia, Sr. Director of Engineering @ Boostr',
    },
    {
      src: '/images/testimonials/testimonial-4-dmytro.png',
      width: 1151,
      height: 343,
      alt: 'Рекомендація від Dmytro Nazarenkov, QA Engineer',
    },
    {
      src: '/images/testimonials/testimonial-5-kateryna.png',
      width: 1151,
      height: 325,
      alt: 'Рекомендація від Катерини Кубасової, Back End Developer at Zazmic Inc',
    },
  ];

  private readonly activeIndex = signal<number | null>(null);

  protected readonly activeTestimonial = computed(() => {
    const index = this.activeIndex();
    return index === null ? null : this.testimonials[index];
  });

  open(index: number): void {
    this.activeIndex.set(index);
  }

  close(): void {
    this.activeIndex.set(null);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.close();
  }
}
