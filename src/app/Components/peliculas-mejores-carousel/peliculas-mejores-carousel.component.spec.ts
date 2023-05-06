import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasMejoresCarouselComponent } from './peliculas-mejores-carousel.component';

describe('PeliculasMejoresCarouselComponent', () => {
  let component: PeliculasMejoresCarouselComponent;
  let fixture: ComponentFixture<PeliculasMejoresCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasMejoresCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasMejoresCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
