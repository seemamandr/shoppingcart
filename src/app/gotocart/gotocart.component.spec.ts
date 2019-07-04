import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotocartComponent } from './gotocart.component';

describe('GotocartComponent', () => {
  let component: GotocartComponent;
  let fixture: ComponentFixture<GotocartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotocartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
