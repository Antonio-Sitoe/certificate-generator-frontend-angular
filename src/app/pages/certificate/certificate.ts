import { ICertificate } from '@/@types/certificate';
import { CertificateService } from '@/services/certificate';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-certificate',
  imports: [RouterLink],
  templateUrl: './certificate.html',
})
export class Certificate implements OnInit {
  id: string | undefined;
  certificate: ICertificate | undefined;
  @ViewChild('certificateRef') certificateRef: ElementRef | undefined;
  isDownloading: boolean = false;
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
  downloadCertificate() {
    const certificateRef = this.certificateRef?.nativeElement;

    if (!certificateRef) {
      console.error('Elemento do certificado não encontrado');
      return;
    }

    // Mostrar loading
    this.isDownloading = true;

    // Configurações do html2canvas para lidar com cores problemáticas
    const options = {
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      scale: 2, // Melhor qualidade
      logging: false,
      ignoreElements: (element: Element) => {
        // Ignorar elementos com cores problemáticas
        const style = window.getComputedStyle(element);
        const color = style.color || style.backgroundColor || style.borderColor;
        return color.includes('oklch') || color.includes('hsl');
      },
    };

    html2canvas(certificateRef, options)
      .then((canvas) => {
        try {
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png', 1.0);
          link.download = `certificate-${
            this.certificate?.name || 'unnamed'
          }.png`;
          link.click();
          this.isDownloading = false;
        } catch (error) {
          console.error('Erro ao criar link de download:', error);
          this.fallbackDownload(canvas);
        }
      })
      .catch((error) => {
        console.error('Erro ao gerar certificado:', error);
        // Fallback: tentar sem configurações especiais
        this.fallbackDownload(null);
      });
  }

  private fallbackDownload(canvas: HTMLCanvasElement | null) {
    if (!canvas) {
      // Tentar novamente com configurações básicas
      const certificateRef = this.certificateRef?.nativeElement;
      html2canvas(certificateRef, {
        backgroundColor: '#ffffff',
        scale: 1,
        useCORS: true,
      })
        .then((fallbackCanvas) => {
          this.createDownload(fallbackCanvas);
        })
        .catch((fallbackError) => {
          console.error('Erro no fallback:', fallbackError);
          this.showDownloadError();
        })
        .finally(() => {
          this.isDownloading = false;
        });
    } else {
      this.createDownload(canvas);
    }
  }

  private createDownload(canvas: HTMLCanvasElement) {
    try {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png', 0.8); // Qualidade reduzida para compatibilidade
      link.download = `certificate-${this.certificate?.name || 'unnamed'}.png`;
      link.click();
    } catch (error) {
      console.error('Erro ao criar download:', error);
      this.showDownloadError();
    } finally {
      this.isDownloading = false;
    }
  }

  private showDownloadError() {
    // Aqui você pode implementar uma notificação de erro
    alert('Erro ao gerar o certificado. Tente novamente.');
  }
}
