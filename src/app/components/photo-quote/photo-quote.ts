import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n';
import { ScrollReveal } from '../../core/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-photo-quote',
  imports: [ScrollReveal, NgOptimizedImage],
  templateUrl: './photo-quote.html',
  styleUrl: './photo-quote.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoQuote {
  protected readonly i18n = inject(I18nService);

  // Splits each line around the en dash so it can be kept upright and evenly
  // spaced via CSS margins, instead of relying on space characters that read
  // unevenly once the browser synthesizes italics for Space Grotesk.
  protected readonly quoteParts = computed(() =>
    this.i18n.dict().quote.lines.map((line) => line.split(' – ') as [string, string]),
  );
}
