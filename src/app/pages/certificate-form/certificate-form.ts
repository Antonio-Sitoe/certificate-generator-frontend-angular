import { ICertificate } from '@/@types/certificate';
import { BaseUi } from '@/components/base-ui/base-ui';
import { ZardButtonComponent } from '@/components/button/button.component';
import { ZardInputDirective } from '@/components/input/input';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CertificateService } from '../../services/certificate';
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-certificate-form',
  imports: [BaseUi, ZardButtonComponent, ZardInputDirective, FormsModule],
  templateUrl: './certificate-form.html',
})
export class CertificateForm {
  @ViewChild('form') form: NgForm | undefined;
  name: string = '';
  activity: string = '';
  activities: string[] = [];

  constructor(private certificateService: CertificateService) {}

  campoValido(control: NgModel) {
    return control.invalid && control.touched;
  }

  adicionarAtividade() {
    if (this.activity && this.activity.trim() !== '') {
      this.activities.push(this.activity.trim());
      this.activity = '';
    }
  }

  removerAtividade(index: number) {
    this.activities.splice(index, 1);
  }

  formValido() {
    return this.activities.length > 0 && this.name.trim().length > 0;
  }
  reset() {
    this.name = '';
    this.activity = '';
    this.activities = [];
    this.form?.resetForm();
  }
  submit() {
    const certificate: ICertificate = {
      id: nanoid(),
      name: this.name,
      activities: this.activities,
      date: this.currentDate(),
    };
    this.certificateService.addCertificate(certificate);
    this.reset();
  }

  currentDate() {
    const date = new Date();
    return date.toLocaleDateString('pt-PT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
}
