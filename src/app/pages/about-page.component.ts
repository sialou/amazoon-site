import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  template: `
  <section class="wrap">
    <h1>À propos</h1>
    <p><strong>AmazoOn du Web</strong> est une ONG dédiée à l’inclusion numérique des femmes et des jeunes filles en Afrique francophone.</p>
    <ul>
      <li>Formations au code et compétences numériques.</li>
      <li>Mentorat et orientation vers les métiers du digital.</li>
      <li>Partenariats avec écoles, entreprises et institutions.</li>
    </ul>
  </section>
  `,
  styles: [`.wrap{padding:2rem 1rem}`]
})
export class AboutPageComponent {}
