import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  readonly text = signal('');
  readonly visible = signal(false);

  private hideTimeoutId: ReturnType<typeof setTimeout> | null = null;

  show(text: string, durationMs = 2600): void {
    if (this.hideTimeoutId !== null) {
      clearTimeout(this.hideTimeoutId);
    }

    this.text.set(text);
    this.visible.set(true);
    this.hideTimeoutId = setTimeout(() => this.visible.set(false), durationMs);
  }
}
