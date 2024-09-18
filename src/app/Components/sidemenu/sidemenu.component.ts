import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  userName: string = 'Milton Velásquez';
  backgroundColor: string = '#1e88e5';
  menuWidth: string = '250px';
  isVisible: boolean = true;

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  changeBackgroundColor(): void {
    const colors = ['#43a047', '#1e88e5',  '#e53935', '#8e24aa', '#1e24aa', '#9e24aa'];
    this.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }

  changeSize(): void {
    this.menuWidth = this.menuWidth === '250px' ? '200px' : '350px';
  }
}