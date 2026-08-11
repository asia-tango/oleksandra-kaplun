import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n';
import { ScrollReveal } from '../../core/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-hero',
  imports: [ScrollReveal, NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly i18n = inject(I18nService);
}
