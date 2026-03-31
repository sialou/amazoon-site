import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})



export class NewsDetailComponent {

  news: any;
  relatedNews: any[] = [];

  newsList = [
    {
      slug: 'formation-numerique-yopougon',
      title: 'Formation numérique à Yopougon',
      date: new Date('2025-03-01'),
      image: 'assets/images/4.jpg',
      content: `
        <p><strong>Plus de 120 femmes</strong> ont été formées aux compétences digitales.</p>
        <p>Cette initiative renforce leur autonomie et leur accès aux opportunités.</p>
      `
    },
    {
      slug: 'meetup-femmes-tech',
      title: 'Meet-up Femmes & Tech',
      date: new Date('2025-02-01'),
      image: 'assets/images/4.jpg',
      content: `
        <p>Un espace d’échange pour les femmes du numérique.</p>
        <p><strong>Inspiration, networking et opportunités.</strong></p>
      `
    }
  ];

  constructor(private route: ActivatedRoute, private meta: Meta, private title: Title) {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.news = this.newsList.find(n => n.slug === slug);

    // Actualités similaires
    this.relatedNews = this.newsList
      .filter(n => n.slug !== slug)
      .slice(0, 2);
  }

share(platform: string) {
  const url = window.location.href;
  const text = this.news.title;

  let shareUrl = '';

  switch (platform) {
    case 'whatsapp':
      shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
      break;

    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;

    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      break;
  }

  window.open(shareUrl, '_blank');
}


ngOnInit() {
  this.title.setTitle(this.news.title);

  this.meta.updateTag({ property: 'og:title', content: this.news.title });
  this.meta.updateTag({ property: 'og:description', content: this.news.excerpt });
  this.meta.updateTag({ property: 'og:image', content: this.news.image });
  this.meta.updateTag({ property: 'og:url', content: window.location.href });
}
}