import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSimilaresBusquedaComponent } from './carousel-similares-busqueda.component';

describe('CarouselSimilaresBusquedaComponent', () => {
  let component: CarouselSimilaresBusquedaComponent;
  let fixture: ComponentFixture<CarouselSimilaresBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselSimilaresBusquedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselSimilaresBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
