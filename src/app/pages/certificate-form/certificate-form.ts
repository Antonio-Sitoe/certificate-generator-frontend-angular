import { BaseUi } from '@/components/base-ui/base-ui';
import { ZardButtonComponent } from '@/components/button/button.component';
import { ItemCertificate } from '@/components/item-certificate/item-certificate';
import { ZardInputDirective } from '@/components/input/input';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate-form',
  imports: [ItemCertificate, BaseUi, ZardButtonComponent, ZardInputDirective],
  templateUrl: './certificate-form.html',
})
export class CertificateForm {}
