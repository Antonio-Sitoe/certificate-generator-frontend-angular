import { Routes } from '@angular/router';
import { Home } from '@/pages/home/home';
import { CertificateForm } from '@/pages/certificate-form/certificate-form';
import { Certificate } from './pages/certificate/certificate';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'certificate/new', component: CertificateForm },
  { path: 'certificate/:id', component: Certificate },
  { path: '**', redirectTo: '/home' },
];
