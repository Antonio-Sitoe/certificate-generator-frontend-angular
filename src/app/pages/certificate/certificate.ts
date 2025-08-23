import { ICertificate } from '@/@types/certificate';
import { CertificateService } from '@/services/certificate';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificate',
  imports: [RouterLink],
  templateUrl: './certificate.html',
})
export class Certificate implements OnInit {
  id: string | undefined;
  certificate: ICertificate | undefined;
  constructor(
    private certificateService: CertificateService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') ?? '';
      this.certificate = this.certificateService
        .getCertificates()
        .find((certificate) => certificate.id === this.id);
      console.log(this.certificate);
    });
  }
}
