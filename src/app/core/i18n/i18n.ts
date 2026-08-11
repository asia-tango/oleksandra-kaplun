import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Dictionary, en, uk } from './i18n.data';

export type Lang = 'uk' | 'en';

function detectInitialLang(isBrowser: boolean): Lang {
  if (!isBrowser) {
    return 'en';
  }
  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  return browserLang === 'uk' ? 'uk' : 'en';
}

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly lang = signal<Lang>(detectInitialLang(this.isBrowser));

  readonly dict = computed<Dictionary>(() => (this.lang() === 'uk' ? uk : en));

  constructor() {
    effect(() => {
      if (this.isBrowser) {
        document.documentElement.lang = this.lang();
      }
    });
  }

  setLang(next: Lang): void {
    if (this.lang() === next) {
      return;
    }

    const canAnimate =
      this.isBrowser && typeof document !== 'undefined' && 'startViewTransition' in document;

    if (canAnimate) {
      (document as Document & { startViewTransition: (callback: () => void) => void }).startViewTransition(
        () => {
          this.lang.set(next);
        },
      );
    } else {
      this.lang.set(next);
    }
  }

  toggleLang(): void {
    this.setLang(this.lang() === 'uk' ? 'en' : 'uk');
  }
}
