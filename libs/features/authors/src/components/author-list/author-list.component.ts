import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Author, AuthorsService } from '@devfest/data-access-authors';
@Component({
  selector: 'lib-author-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorListComponent {
  private readonly authorsService = inject(AuthorsService);

  authors = signal<Author[]>([]);
  isLoading = signal(true);
  readonly displayedColumns = ['name', 'books', 'avgRating', 'biography', 'actions'];

  constructor() {
    this.loadAuthors();
  }

  private loadAuthors(): void {
    this.authorsService.getAuthors().subscribe({
      next: (authors) => {
        this.authors.set(authors);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      },
    });
  }
}
