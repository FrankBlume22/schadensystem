import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertragDetailsComponent } from './vertrag-details.component';

describe('VertragDetailsComponent', () => {
  let component: VertragDetailsComponent;
  let fixture: ComponentFixture<VertragDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertragDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertragDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
