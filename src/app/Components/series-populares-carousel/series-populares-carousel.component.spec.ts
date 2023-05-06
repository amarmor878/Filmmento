import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesPopularesCarouselComponent } from './series-populares-carousel.component';

describe('SeriesPopularesCarouselComponent', () => {
  let component: SeriesPopularesCarouselComponent;
  let fixture: ComponentFixture<SeriesPopularesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesPopularesCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesPopularesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
