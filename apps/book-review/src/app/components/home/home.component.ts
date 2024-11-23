import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { BookListComponent } from '@devfest/feature-books';
import { AuthorListComponent } from '@devfest/feature-authors';
import { ReviewListComponent } from '@devfest/feature-reviews';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    BookListComponent,
    AuthorListComponent,
    ReviewListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  selectedTab = signal(0);
  // mocked books counts
  booksCount = signal(3);

  // mocked authors counts
  authorsCount = signal(3);

  // mocked reviews counts
  reviewsCount = signal(3);

  setTab(index: number): void {
    this.selectedTab.set(index);
  }
}
