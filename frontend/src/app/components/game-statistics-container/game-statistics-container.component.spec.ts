import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStatisticsContainerComponent } from './game-statistics-container.component';

describe('GameStatisticsContainerComponent', () => {
  let component: GameStatisticsContainerComponent;
  let fixture: ComponentFixture<GameStatisticsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStatisticsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStatisticsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
