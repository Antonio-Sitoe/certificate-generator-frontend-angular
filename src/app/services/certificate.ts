import { Injectable } from '@angular/core';
import { ICertificate } from '@/@types/certificate';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  certificates: ICertificate[] = [];

  addCertificate(certificate: ICertificate) {
    this.certificates.push({
      ...certificate,
    });
    localStorage.setItem('certificates', JSON.stringify(this.certificates));
  }

  getCertificates() {
    const certificates = localStorage.getItem('certificates');
    if (certificates) {
      this.certificates = JSON.parse(certificates);
    }
    return this.certificates;
  }
}
