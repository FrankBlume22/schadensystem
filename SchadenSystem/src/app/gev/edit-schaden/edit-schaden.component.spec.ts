import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchadenComponent } from './edit-schaden.component';

describe('EditSchadenComponent', () => {
  let component: EditSchadenComponent;
  let fixture: ComponentFixture<EditSchadenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSchadenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSchadenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
