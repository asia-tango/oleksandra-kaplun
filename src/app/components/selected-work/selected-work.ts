import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n';
import { ScrollReveal } from '../../core/scroll-reveal/scroll-reveal';

interface WorkLink {
  label: 'Code' | 'Live Demo';
  href: string;
  icon: 'github' | 'external';
}

@Component({
  selector: 'app-selected-work',
  imports: [ScrollReveal],
  templateUrl: './selected-work.html',
  styleUrl: './selected-work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedWork {
  protected readonly i18n = inject(I18nService);

  protected readonly workLinks: WorkLink[][] = [
    [
      { label: 'Code', href: 'https://github.com/asia-tango/ngrx-patterns-cookbook', icon: 'github' },
      { label: 'Live Demo', href: 'https://asia-tango.github.io/ngrx-patterns-cookbook/patterns/entity-adapter', icon: 'external' },
    ],
    [
      { label: 'Code', href: 'https://github.com/asia-tango/radio-player', icon: 'github' },
      { label: 'Live Demo', href: 'https://redwave-fm.web.app/', icon: 'external' },
    ],
    [{ label: 'Code', href: 'https://github.com/asia-tango/oleksandra-kaplun', icon: 'github' }],
  ];
}
