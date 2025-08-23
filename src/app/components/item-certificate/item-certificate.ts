import { Component } from '@angular/core';
import { ZardButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificate',
  imports: [ZardButtonComponent],
  templateUrl: './item-certificate.html',
})
export class ItemCertificate {
  title: string | undefined;
  id: string | undefined;
  constructor(private router: Router) {}

  gotoCertificate() {
    this.router.navigate(['/certificate', this.id]);
  }
}
