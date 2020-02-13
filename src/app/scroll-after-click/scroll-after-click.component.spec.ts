import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollAfterClickComponent } from './scroll-after-click.component';

describe('ScrollAfterClickComponent', () => {
  let component: ScrollAfterClickComponent;
  let fixture: ComponentFixture<ScrollAfterClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollAfterClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollAfterClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
