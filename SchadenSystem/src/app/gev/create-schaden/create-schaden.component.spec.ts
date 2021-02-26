import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchadenComponent } from './create-schaden.component';

describe('CreateSchadenComponent', () => {
  let component: CreateSchadenComponent;
  let fixture: ComponentFixture<CreateSchadenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSchadenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSchadenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
