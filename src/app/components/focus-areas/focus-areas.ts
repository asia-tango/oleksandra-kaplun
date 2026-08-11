import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n';
import { ScrollReveal } from '../../core/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-focus-areas',
  imports: [ScrollReveal],
  templateUrl: './focus-areas.html',
  styleUrl: './focus-areas.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FocusAreas {
  protected readonly i18n = inject(I18nService);
  protected readonly openIndex = signal<number | null>(0);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
