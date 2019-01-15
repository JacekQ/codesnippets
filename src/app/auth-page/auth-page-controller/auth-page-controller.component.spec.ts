import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageControllerComponent } from './auth-page-controller.component';

describe('AuthPageControllerComponent', () => {
  let component: AuthPageControllerComponent;
  let fixture: ComponentFixture<AuthPageControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPageControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPageControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
