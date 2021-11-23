import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoListaComponent } from './carrinho-lista.component';

describe('CarrinhoListaComponent', () => {
  let component: CarrinhoListaComponent;
  let fixture: ComponentFixture<CarrinhoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
