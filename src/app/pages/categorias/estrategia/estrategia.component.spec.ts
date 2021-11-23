import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategiaComponent } from './estrategia.component';

describe('EstrategiaComponent', () => {
  let component: EstrategiaComponent;
  let fixture: ComponentFixture<EstrategiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstrategiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
