import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPopularesCarouselComponent } from './peliculas-populares-carousel.component';

describe('PeliculasPopularesCarouselComponent', () => {
  let component: PeliculasPopularesCarouselComponent;
  let fixture: ComponentFixture<PeliculasPopularesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasPopularesCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasPopularesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
