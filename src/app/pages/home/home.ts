import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { SelectedWork } from '../../components/selected-work/selected-work';
import { FocusAreas } from '../../components/focus-areas/focus-areas';
import { PhotoQuote } from '../../components/photo-quote/photo-quote';
import { Testimonials } from '../../components/testimonials/testimonials';
import { ContactFooter } from '../../components/contact-footer/contact-footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, SelectedWork, FocusAreas, PhotoQuote, Testimonials, ContactFooter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
