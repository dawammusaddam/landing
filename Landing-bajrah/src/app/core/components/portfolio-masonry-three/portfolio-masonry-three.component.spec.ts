import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMasonryThreeComponent } from './portfolio-masonry-three.component';

describe('PortfolioMasonryThreeComponent', () => {
  let component: PortfolioMasonryThreeComponent;
  let fixture: ComponentFixture<PortfolioMasonryThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioMasonryThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMasonryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
