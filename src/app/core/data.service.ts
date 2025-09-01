import { Injectable } from '@angular/core';

export interface Stat { label: string; value: string; more?: string; }
export interface Project {
  slug: string;
  title: string;
  cover: string;
  objective: string;
  location: string;
  partners: string[];
  results: string[];
  quote?: { text: string; author: string };
  tags?: string[];
  body?: string;
}
export interface Testimonial { name: string; role: string; text: string; photo?: string; }
export interface NewsItem { slug: string; title: string; date: string; excerpt: string; image?: string; body?: string; }

@Injectable({ providedIn: 'root' })
export class DataService {
  site = {
    name: 'AmazoOn du Web',
    tagline: 'Inclusion numérique des femmes et des jeunes filles',
    metaDescription: 'ONG dédiée à l’inclusion numérique des femmes et des jeunes filles en Afrique francophone. Formations, mentorat, projets STEM, et partenariats.',
    hero: {
      title: 'Chaque fille connectée est une opportunité qui grandit.',
      subtitle: 'Nous accompagnons les femmes et les jeunes filles à accéder aux compétences numériques et aux métiers du futur.',
      ctas: [{ label: 'Rejoindre', link: '/a-propos' }, { label: 'Soutenir', link: '/soutenir' }],
      image: 'assets/images/hero.jpg'
    }
  };

  stats: Stat[] = [
    { label: 'Femmes & filles formées', value: '+30 000', more: 'À adapter avec vos vrais chiffres' },
    { label: 'Programmes conduits', value: '40+', more: 'Ex.: WHOCODE, STEM 4 Girls…' },
    { label: 'Années d’action', value: '10', more: 'Mettre votre année de création pour calcul' },
    { label: 'Communautés touchées', value: '100+', more: 'Villes/écoles/associations partenaires' }
  ];

  projects: Project[] = [
    {
      slug: 'whocode',
      title: 'WHOCODE — Initiation au code pour les jeunes filles',
      cover: 'assets/images/project-whocode.jpg',
      objective: 'Initier 1 000 jeunes filles au code (HTML, CSS, Python) et aux bases de l’IA responsable.',
      location: 'Abidjan & régions',
      partners: ['AFJCI', 'ACF', 'Lycées partenaires'],
      results: [
        '1 200 participantes, 65% poursuivent par un club de code.',
        '120 mentors formés (bénévoles).',
        'Création de 30 clubs “Girls Code”.'
      ],
      quote: { text: 'Avant, je n’osais pas. Maintenant, je crée mon premier site !', author: 'Aïcha, 16 ans' },
      tags: ['Éducation', 'Code', 'Mentorat'],
      body: 'Mettre ici un texte détaillé (méthodo, calendrier, suivi, liens presse).'
    },
    {
      slug: 'stem-for-girls',
      title: 'STEM 4 Girls — Ateliers sciences & robotique',
      cover: 'assets/images/project-stem.jpg',
      objective: 'Donnons une première expérience pratique des STEM à des collégiennes et lycéennes.',
      location: 'Côte d’Ivoire (multi-villes)',
      partners: ['Établissements publics', 'Entreprises tech'],
      results: ['800 participantes', '40 kits robotique déployés', 'Concours annuel de prototypage'],
      tags: ['STEM', 'Robotique', 'Orientation'],
      body: 'Décrivez les ateliers, les intervenants, les résultats quantitatifs et qualitatifs.'
    }
  ];

  testimonials: Testimonial[] = [
    { name: 'Mariam K.', role: 'Bénéficiaire', text: 'La formation m’a ouvert des portes : je gère maintenant le site de notre association.' },
    { name: 'Kouadio T.', role: 'Partenaire lycée', text: 'L’approche pédagogique est concrète et motivante pour nos élèves.' },
    { name: 'HUB2', role: 'Partenaire entreprise', text: 'Des actions structurées qui créent de vraies compétences locales.' }
  ];

  news: NewsItem[] = [
    { slug: 'atelier-cocody', title: 'Atelier numérique à Cocody', date: '2025-07-18', excerpt: 'Retour sur une journée de découverte du code.', image: 'assets/images/news-1.jpg' },
    { slug: 'prix-ong-2025', title: 'AmazoOn du Web lauréat', date: '2025-05-09', excerpt: 'Notre travail primé lors d’un forum des ONG.', image: 'assets/images/news-2.jpg' }
  ];

  partners = [
    { name: 'AFJCI', logo: 'assets/images/partner-afjci.png', url: '#' },
    { name: 'ACF', logo: 'assets/images/partner-acf.png', url: '#' },
    { name: 'Établissements scolaires', logo: 'assets/images/partner-school.png', url: '#' }
  ];

  getProjectBySlug(slug: string) {
    return this.projects.find(p => p.slug === slug);
  }
}
