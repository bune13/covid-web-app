import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPageControllerComponent } from './data-page-controller.component';

describe('DataPageControllerComponent', () => {
  let component: DataPageControllerComponent;
  let fixture: ComponentFixture<DataPageControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPageControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPageControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
