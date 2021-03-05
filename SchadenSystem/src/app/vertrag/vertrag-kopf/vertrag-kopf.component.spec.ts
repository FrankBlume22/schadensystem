import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertragKopfComponent } from './vertrag-kopf.component';

describe('VertragKopfComponent', () => {
  let component: VertragKopfComponent;
  let fixture: ComponentFixture<VertragKopfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertragKopfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertragKopfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
