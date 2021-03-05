import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertragFehlermeldungenComponent } from './vertrag-fehlermeldungen.component';

describe('VertragFehlermeldungenComponent', () => {
  let component: VertragFehlermeldungenComponent;
  let fixture: ComponentFixture<VertragFehlermeldungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertragFehlermeldungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertragFehlermeldungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
