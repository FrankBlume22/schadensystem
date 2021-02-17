import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchadenListeItemComponent } from './schaden-liste-item.component';

describe('SchadenListeItemComponent', () => {
  let component: SchadenListeItemComponent;
  let fixture: ComponentFixture<SchadenListeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchadenListeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchadenListeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
