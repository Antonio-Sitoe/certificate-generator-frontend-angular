import { Component, OnInit } from '@angular/core';
import { ItemCertificate } from '@/components/item-certificate/item-certificate';
import { BaseUi } from '@/components/base-ui/base-ui';
import { ZardButtonComponent } from '@/components/button/button.component';
import { RouterLink } from '@angular/router';
import { CertificateService } from '../../services/certificate';
import { ICertificate } from '@/@types/certificate';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemCertificate, BaseUi, ZardButtonComponent, RouterLink],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  id = 1;
  certificates: ICertificate[] = [];
  constructor(private certificateService: CertificateService) {}

  getCertificates() {
    return this.certificateService.getCertificates();
  }
  ngOnInit(): void {
    const list = this.getCertificates();
    this.certificates = list;
  }
}
