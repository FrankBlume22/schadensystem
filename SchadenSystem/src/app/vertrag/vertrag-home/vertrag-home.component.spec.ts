import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertragHomeComponent } from './vertrag-home.component';

describe('VertragHomeComponent', () => {
  let component: VertragHomeComponent;
  let fixture: ComponentFixture<VertragHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertragHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertragHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
