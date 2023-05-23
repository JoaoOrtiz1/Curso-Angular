import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasNgstyleComponent } from './diretivas-ngstyle.component';

describe('DiretivasNgstyleComponent', () => {
  let component: DiretivasNgstyleComponent;
  let fixture: ComponentFixture<DiretivasNgstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasNgstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivasNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
