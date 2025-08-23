import { Injectable } from '@angular/core';
import { ICertificate } from '@/@types/certificate';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  certificates: ICertificate[] = [];

  addCertificate(certificate: ICertificate) {
    this.certificates.push(certificate);
  }

  getCertificates() {
    return this.certificates;
  }
}
