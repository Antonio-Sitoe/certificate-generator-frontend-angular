import { Component } from '@angular/core';
import { ZardCardComponent } from '../card/card.component';
import { ZardButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificate',
  imports: [ZardCardComponent, ZardButtonComponent],
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
