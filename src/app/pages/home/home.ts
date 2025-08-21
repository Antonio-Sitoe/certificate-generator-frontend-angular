import { Component } from '@angular/core';
import { ItemCertificate } from '@/components/item-certificate/item-certificate';
import { BaseUi } from '@/components/base-ui/base-ui';
import { ZardButtonComponent } from '@/components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemCertificate, BaseUi, ZardButtonComponent, RouterLink],
  templateUrl: './home.html',
})
export class Home {
  id = 1;
}
