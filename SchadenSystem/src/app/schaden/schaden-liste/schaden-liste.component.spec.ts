import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchadenListeComponent } from './schaden-liste.component';

describe('SchadenListeComponent', () => {
  let component: SchadenListeComponent;
  let fixture: ComponentFixture<SchadenListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchadenListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchadenListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
