import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

interface News {
  image: string;
  title: string;
  date: string;
  excerpt: string;
}
@Component({
  selector: 'app-news',
  imports: [CommonModule, DatePipe, RouterModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
newsList = [
  {
    title: 'Formation numérique à Yopougon',
    slug: 'formation-numerique-yopougon',
    date: 'Mars 2025',
    excerpt: 'Plus de 120 femmes formées aux compétences digitales de base.',
    image: 'assets/images/4.jpg'
  },
  {
    title: 'Meet-up Femmes & Tech',
    slug: 'meetup-femmes-tech',
    date: 'Février 2025',
    excerpt: 'Un espace d’échange et d’inspiration pour les femmes du numérique.',
    image: 'assets/images/4.jpg'
  }
  ,
  {
    title: 'Meet-up Femmes & Tech',
    slug: 'meetup-femmes-tech',
    date: 'Février 2025',
    excerpt: 'Un espace d’échange et d’inspiration pour les femmes du numérique.',
    image: 'assets/images/4.jpg'
  }
];

}
