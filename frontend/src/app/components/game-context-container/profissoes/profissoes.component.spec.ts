import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissoesComponent } from './profissoes.component';

describe('ProfissoesComponent', () => {
  let component: ProfissoesComponent;
  let fixture: ComponentFixture<ProfissoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
