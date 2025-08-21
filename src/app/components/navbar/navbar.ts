import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  menuItems = [
    {
      label: 'Lista de Certificados',
      route: '/home',
      current: true,
      icon: 'ph ph-medal',
    },
    {
      label: 'Gerar Certificado',
      route: '/certificate/new',
      current: false,
      icon: 'ph ph-circles-three-plus',
    },
  ];

  setActiveMenuItem(route: string) {
    this.menuItems = this.menuItems.map((item) => ({
      ...item,
      current: item.route === route,
    }));
  }
}
