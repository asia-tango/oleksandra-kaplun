export interface Dictionary {
  nav: {
    work: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    role: string;
    headline: string;
    subline: string;
  };
  work: {
    heading: string;
    items: {
      name: string;
      stack: string;
      fact: string;
    }[];
  };
  focus: {
    heading: string;
    items: {
      title: string;
      body: string;
    }[];
  };
  quote: {
    lines: [string, string];
  };
  testimonials: {
    heading: string;
    linkedinLink: string;
  };
  contact: {
    heading: string;
    subline: string;
    emailCopied: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      errorRequired: string;
      errorEmail: string;
      errorMinLength: string;
      errorMaxLength: string;
    };
  };
}

export const uk: Dictionary = {
  nav: {
    work: 'Проєкти',
    testimonials: 'Рекомендації',
    contact: 'Контакти',
  },
  hero: {
    role: 'Senior frontend engineer, Angular',
    headline: 'Будую застосунки, яким команда довіряє і які не розвалюються під навантаженням',
    subline: '6+ років · AdTech / FinTech · Україна',
  },
  work: {
    heading: 'Вибрані проєкти',
    items: [
      {
        name: 'NgRx patterns cookbook',
        stack: 'Angular · NgRx · RxJS',
        fact: 'Збірка перевірених на практиці шаблонів стейт-менеджменту для великих команд',
      },
      {
        name: 'Radio player',
        stack: 'Angular · Signals · Web Audio API',
        fact: 'Плеєр інтернет-радіо з живою візуалізацією звуку без сторонніх бібліотек',
      },
      {
        name: 'Цей сайт',
        stack: 'Angular · Zoneless · Signal Forms',
        fact: 'Портфоліо-лендінг на чистих сигналах, без Zone.js і зайвих залежностей',
      },
    ],
  },
  focus: {
    heading: 'Фокус',
    items: [
      {
        title: 'State management',
        body: 'NgRx, Signals чи просто властивість — складність стейту відповідає складності задачі.',
      },
      {
        title: 'Data-heavy UI',
        body: 'Роблю так, щоб таблиці на тисячі рядків користувачі гортали так само плавно, як на десять.',
      },
      {
        title: 'RBAC and access control',
        body: 'Будую системи доступу й дозволів, які витримують ріст ролей без переписування з нуля.',
      },
      {
        title: 'Legacy migrations',
        body: 'Веду AngularJS-проєкти до сучасного Angular поступово, без зупинки продакшену на жодному кроці.',
      },
    ],
  },
  quote: {
    lines: [
      'Важко зробити помилку – ознака хорошої архітектури.',
      'Легко її знайти – ознака хорошого тестування.',
    ],
  },
  testimonials: {
    heading: 'Рекомендації',
    linkedinLink: 'Усі рекомендації на LinkedIn →',
  },
  contact: {
    heading: 'Let’s talk.',
    subline: 'Відкрита і до менторства чи допомоги з підготовкою до співбесід.',
    emailCopied: 'Email скопійовано: kaplunoleksandra@gmail.com',
    form: {
      name: 'Ваше ім’я',
      namePlaceholder: 'Ім’я та прізвище',
      email: 'Ваш email',
      emailPlaceholder: 'you@company.com',
      message: 'Повідомлення',
      messagePlaceholder: 'Коротко про вакансію чи питання',
      submit: 'Надіслати',
      sending: 'Надсилаю…',
      success: 'Дякую! Повідомлення надіслано.',
      error: 'Щось пішло не так. Спробуйте ще раз або напишіть напряму.',
      errorRequired: 'Обов’язкове поле',
      errorEmail: 'Некоректний email',
      errorMinLength: 'Занадто короткий текст',
      errorMaxLength: 'Занадто довгий текст (максимум 2000 символів)',
    },
  },
};

export const en: Dictionary = {
  nav: {
    work: 'Projects',
    testimonials: 'Recommendations',
    contact: 'Contact',
  },
  hero: {
    role: 'Senior frontend engineer, Angular',
    headline: 'I build Angular apps the team trusts and that hold up under load',
    subline: '6+ years · AdTech / FinTech · Ukraine',
  },
  work: {
    heading: 'Selected work',
    items: [
      {
        name: 'NgRx patterns cookbook',
        stack: 'Angular · NgRx · RxJS',
        fact: 'A field-tested collection of state management patterns for larger teams',
      },
      {
        name: 'Radio player',
        stack: 'Angular · Signals · Web Audio API',
        fact: 'An internet radio player with live audio visualization, no third-party libraries',
      },
      {
        name: 'This site',
        stack: 'Angular · Zoneless · Signal Forms',
        fact: 'A portfolio landing built on pure signals, no Zone.js and minimal dependencies',
      },
    ],
  },
  focus: {
    heading: 'Focus areas',
    items: [
      {
        title: 'State management',
        body: 'NgRx, Signals, or a plain property – state complexity matches task complexity, nothing more.',
      },
      {
        title: 'Data-heavy UI',
        body: 'I make a table with thousands of rows scroll as smoothly as one with ten.',
      },
      {
        title: 'RBAC and access control',
        body: 'I build access systems that survive growing roles and permissions without a rewrite.',
      },
      {
        title: 'Legacy migrations',
        body: 'I move AngularJS codebases to modern Angular step by step, without ever taking production down.',
      },
    ],
  },
  quote: {
    lines: [
      "A mistake that's hard to make – that's good architecture.",
      "A mistake that's easy to find – that's good testing.",
    ],
  },
  testimonials: {
    heading: 'Testimonials',
    linkedinLink: 'All recommendations on LinkedIn →',
  },
  contact: {
    heading: 'Let’s talk.',
    subline: 'Open to mentoring and interview-prep sessions too.',
    emailCopied: 'Email copied: kaplunoleksandra@gmail.com',
    form: {
      name: 'Your name',
      namePlaceholder: 'Full name',
      email: 'Your email',
      emailPlaceholder: 'you@company.com',
      message: 'Message',
      messagePlaceholder: 'A quick note about the role or your question',
      submit: 'Send',
      sending: 'Sending…',
      success: 'Thanks! Your message is on its way.',
      error: 'Something went wrong. Please try again or reach out directly.',
      errorRequired: 'This field is required',
      errorEmail: 'Enter a valid email',
      errorMinLength: 'This is too short',
      errorMaxLength: 'This is too long (2000 characters max)',
    },
  },
};
