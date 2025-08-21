import { Component } from '@angular/core';
import { ZardCardComponent } from '../card/card.component';
import { ZardButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-item-certificate',
  imports: [ZardCardComponent, ZardButtonComponent],
  templateUrl: './item-certificate.html',
})
export class ItemCertificate {
  title: string | undefined;
}
