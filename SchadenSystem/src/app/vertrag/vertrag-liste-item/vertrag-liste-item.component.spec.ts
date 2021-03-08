import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertragListeItemComponent } from './vertrag-liste-item.component';

describe('VertragListeItemComponent', () => {
  let component: VertragListeItemComponent;
  let fixture: ComponentFixture<VertragListeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertragListeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertragListeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
