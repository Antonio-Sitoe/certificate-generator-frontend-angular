import { Component } from '@angular/core';
import { BaseUi } from '@/components/base-ui/base-ui';
import { ZardButtonComponent } from '@/components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificate',
  imports: [BaseUi, ZardButtonComponent, RouterLink],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css',
})
export class Certificate {}
