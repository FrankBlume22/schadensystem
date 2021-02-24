import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucheStartComponent } from './suche-start.component';

describe('SucheStartComponent', () => {
  let component: SucheStartComponent;
  let fixture: ComponentFixture<SucheStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucheStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucheStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
