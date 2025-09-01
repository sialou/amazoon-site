import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { ImpactPageComponent } from './pages/impact-page.component';
import { ProjectsPageComponent } from './pages/projects-page.component';
import { ProjectDetailPageComponent } from './pages/project-detail-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page.component';
import { NewsPageComponent } from './pages/news-page.component';
import { PartnersPageComponent } from './pages/partners-page.component';
import { ContactPageComponent } from './pages/contact-page.component';
import { DonatePageComponent } from './pages/donate-page.component';
import { AboutPageComponent } from './pages/about-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'AmazoOn du Web — Inclusion numérique' },
  { path: 'impact', component: ImpactPageComponent, title: 'Notre impact — AmazoOn du Web' },
  { path: 'projets', component: ProjectsPageComponent, title: 'Nos projets — AmazoOn du Web' },
  { path: 'projets/:slug', component: ProjectDetailPageComponent, title: 'Projet — AmazoOn du Web' },
  { path: 'temoignages', component: TestimonialsPageComponent, title: 'Témoignages — AmazoOn du Web' },
  { path: 'actualites', component: NewsPageComponent, title: 'Actualités — AmazoOn du Web' },
  { path: 'partenaires', component: PartnersPageComponent, title: 'Partenaires — AmazoOn du Web' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact — AmazoOn du Web' },
  { path: 'soutenir', component: DonatePageComponent, title: 'Soutenir — AmazoOn du Web' },
  { path: 'a-propos', component: AboutPageComponent, title: 'À propos — AmazoOn du Web' },
  { path: '**', redirectTo: '' }
];
