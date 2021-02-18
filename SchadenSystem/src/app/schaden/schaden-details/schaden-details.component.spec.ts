import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchadenDetailsComponent } from './schaden-details.component';

describe('SchadenDetailsComponent', () => {
  let component: SchadenDetailsComponent;
  let fixture: ComponentFixture<SchadenDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchadenDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchadenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
