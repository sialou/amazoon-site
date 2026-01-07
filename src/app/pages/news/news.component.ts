import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

interface News {
  image: string;
  title: string;
  date: string;
  excerpt: string;
}
@Component({
  selector: 'app-news',
  imports: [CommonModule, DatePipe],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
data: {
    news: News[];
  } = {
    news: [
      {
        image: 'assets/news/1.jpg',
        title: 'Lancement du projet X',
        date: '2025-01-10',
        excerpt: 'Un nouveau projet pour renforcer l’impact social.'
      }
    ]
  };
}
