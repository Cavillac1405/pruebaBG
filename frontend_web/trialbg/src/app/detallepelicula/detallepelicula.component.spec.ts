import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepeliculaComponent } from './detallepelicula.component';

describe('DetallepeliculaComponent', () => {
  let component: DetallepeliculaComponent;
  let fixture: ComponentFixture<DetallepeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallepeliculaComponent]
    });
    fixture = TestBed.createComponent(DetallepeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
