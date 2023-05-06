import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesMejoresCarouselComponent } from './series-mejores-carousel.component';

describe('SeriesMejoresCarouselComponent', () => {
  let component: SeriesMejoresCarouselComponent;
  let fixture: ComponentFixture<SeriesMejoresCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesMejoresCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesMejoresCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
