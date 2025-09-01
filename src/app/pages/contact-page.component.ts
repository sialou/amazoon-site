import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [FormsModule],
  template: `
  <section class="wrap">
    <h1>Contact</h1>
    <form class="form" (ngSubmit)="submit()" #f="ngForm">
      <label>Nom
        <input name="name" [(ngModel)]="form.name" required>
      </label>
      <label>Email
        <input type="email" name="email" [(ngModel)]="form.email" required>
      </label>
      <label>Message
        <textarea name="message" rows="5" [(ngModel)]="form.message" required></textarea>
      </label>
      <button class="btn" type="submit">Envoyer</button>
      <p class="muted">* Démonstration : ce formulaire ne déclenche pas d’email par défaut.</p>
    </form>
  </section>
  `,
  styles: [`
    .wrap{padding:2rem 1rem}
    .form{display:grid;gap:.75rem;max-width:640px}
    input,textarea{width:100%;padding:.6rem;border:1px solid #e5e7eb;border-radius:.5rem}
    .btn{display:inline-block;padding:.6rem 1rem;border-radius:.75rem;background:#2563eb;color:white;text-decoration:none;font-weight:600;border:1px solid #2563eb;width:fit-content}
    .muted{color:#6b7280}
  `]
})
export class ContactPageComponent{
  form = { name: '', email: '', message: '' };
  submit(){ alert('Merci ! Votre message a été pris en compte (démo).'); }
}
