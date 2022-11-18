import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAtComponent } from './register-at.component';

describe('RegisterAtComponent', () => {
  let component: RegisterAtComponent;
  let fixture: ComponentFixture<RegisterAtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
