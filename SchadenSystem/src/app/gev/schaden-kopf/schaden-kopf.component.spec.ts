import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchadenKopfComponent } from './schaden-kopf.component';

describe('SchadenKopfComponent', () => {
  let component: SchadenKopfComponent;
  let fixture: ComponentFixture<SchadenKopfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchadenKopfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchadenKopfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
