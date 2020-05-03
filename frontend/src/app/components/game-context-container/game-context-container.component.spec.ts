import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameContextContainerComponent } from './game-context-container.component';

describe('GameContextContainerComponent', () => {
  let component: GameContextContainerComponent;
  let fixture: ComponentFixture<GameContextContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameContextContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameContextContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
