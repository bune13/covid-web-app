import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarControllerComponent } from './navbar-controller.component';

describe('NavbarControllerComponent', () => {
  let component: NavbarControllerComponent;
  let fixture: ComponentFixture<NavbarControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
