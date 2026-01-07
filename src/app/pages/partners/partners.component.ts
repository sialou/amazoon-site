import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
@Component({
  selector: 'app-partners',
  imports: [CommonModule, DatePipe],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
data = {
    partners: [
      {
        name: 'UNICEF',
        logo: 'assets/partners/unicef.png',
        url: 'https://www.unicef.org'
      },
      {
        name: 'OMS',
        logo: 'assets/partners/who.png',
        url: 'https://www.who.int'
      }
    ]
  };
}
