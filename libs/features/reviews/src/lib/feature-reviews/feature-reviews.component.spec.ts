import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureReviewsComponent } from './feature-reviews.component';

describe('FeatureReviewsComponent', () => {
  let component: FeatureReviewsComponent;
  let fixture: ComponentFixture<FeatureReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureReviewsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
