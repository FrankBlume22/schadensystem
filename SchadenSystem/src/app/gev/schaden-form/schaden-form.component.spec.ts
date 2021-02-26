import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchadenFormComponent } from './schaden-form.component';

describe('SchadenFormComponent', () => {
  let component: SchadenFormComponent;
  let fixture: ComponentFixture<SchadenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchadenFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchadenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
