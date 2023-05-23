import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoEspecComponent } from './curso-espec.component';

describe('CursoEspecComponent', () => {
  let component: CursoEspecComponent;
  let fixture: ComponentFixture<CursoEspecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoEspecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoEspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
