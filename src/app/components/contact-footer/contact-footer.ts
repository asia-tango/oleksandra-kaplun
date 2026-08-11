import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  FormField,
  FormRoot,
  email,
  form,
  maxLength,
  minLength,
  required,
  submit,
} from '@angular/forms/signals';
import emailjs from '@emailjs/browser';
import { I18nService } from '../../core/i18n/i18n';
import { ScrollReveal } from '../../core/scroll-reveal/scroll-reveal';
import { ToastService } from '../../core/toast/toast';
import { Toast } from '../toast/toast';
import { emailjsConfig } from '../../core/email/emailjs.config';

interface ContactFormModel {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const MESSAGE_MAX_LENGTH = 2000;

@Component({
  selector: 'app-contact-footer',
  imports: [ScrollReveal, FormField, FormRoot, Toast],
  templateUrl: './contact-footer.html',
  styleUrl: './contact-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFooter {
  protected readonly i18n = inject(I18nService);
  private readonly toast = inject(ToastService);

  protected readonly contactEmail = 'kaplunoleksandra@gmail.com';

  protected readonly model = signal<ContactFormModel>({ name: '', email: '', message: '' });

  protected readonly contactForm = form(this.model, (path) => {
    required(path.name, { message: () => this.i18n.dict().contact.form.errorRequired });
    required(path.email, { message: () => this.i18n.dict().contact.form.errorRequired });
    email(path.email, { message: () => this.i18n.dict().contact.form.errorEmail });
    required(path.message, { message: () => this.i18n.dict().contact.form.errorRequired });
    minLength(path.message, 10, { message: () => this.i18n.dict().contact.form.errorMinLength });
    maxLength(path.message, MESSAGE_MAX_LENGTH, {
      message: () => this.i18n.dict().contact.form.errorMaxLength,
    });
  });

  protected readonly status = signal<SubmitStatus>('idle');

  async onSubmit(honeypot: HTMLInputElement): Promise<void> {
    if (this.status() === 'sending') {
      return;
    }

    // Honeypot: real visitors never see or fill this field (see contact-footer.html).
    // A filled value means a bot submitted the form — pretend success, skip EmailJS.
    if (honeypot.value) {
      this.model.set({ name: '', email: '', message: '' });
      this.status.set('success');
      return;
    }

    await submit(this.contactForm, async () => {
      this.status.set('sending');

      try {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            name: this.model().name.trim(),
            email: this.model().email.trim(),
            message: this.model().message.trim(),
          },
          { publicKey: emailjsConfig.publicKey },
        );
        this.status.set('success');
        this.model.set({ name: '', email: '', message: '' });
        return;
      } catch {
        this.status.set('error');
        return { kind: 'server', message: this.i18n.dict().contact.form.error };
      }
    });
  }

  // Fires alongside the mailto: link's native behavior (no preventDefault),
  // as a fallback for visitors without a configured mail client — the href
  // still opens one where available, this just also puts the address on
  // the clipboard so it's never a dead end either way.
  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.contactEmail);
      this.toast.show(this.i18n.dict().contact.emailCopied);
    } catch {
      // Clipboard API unavailable or access denied (older browser,
      // insecure context, or OS/browser permission denial) — fail silently.
    }
  }
}
