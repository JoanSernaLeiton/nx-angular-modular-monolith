import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-shared.component.html',
  styleUrl: './ui-shared.component.scss',
})
export class UiSharedComponent {}
