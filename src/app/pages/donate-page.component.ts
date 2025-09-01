import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-donate',
  template: `
  <section class="wrap">
    <h1>Soutenir notre action</h1>
    <p>Chaque contribution accélère l’inclusion numérique des femmes et des jeunes filles.</p>
    <div class="cards">
      <div class="card">
        <h3>Don unique</h3>
        <p>Participez selon vos moyens. (Intégrer un lien de paiement : Momo, carte, virement)</p>
        <a class="btn" href="#">Faire un don</a>
      </div>
      <div class="card">
        <h3>Partenariat</h3>
        <p>Entreprises, fondations : co-construisons un programme à impact.</p>
        <a class="btn outline" href="/contact">Nous contacter</a>
      </div>
    </div>
  </section>
  `,
  styles: [`
    .wrap{padding:2rem 1rem}
    .cards{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
    .card{border:1px solid #e5e7eb;border-radius:1rem;padding:1rem;background:white}
    .btn{display:inline-block;padding:.6rem 1rem;border-radius:.75rem;background:#2563eb;color:white;text-decoration:none;font-weight:600;border:1px solid #2563eb}
    .btn.outline{background:transparent;color:#2563eb}
    @media (max-width:900px){.cards{grid-template-columns:1fr}}
  `]
})
export class DonatePageComponent{}
