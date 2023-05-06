import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTrailerComponent } from './dialog-trailer.component';

describe('DialogTrailerComponent', () => {
  let component: DialogTrailerComponent;
  let fixture: ComponentFixture<DialogTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTrailerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
