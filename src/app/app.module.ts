import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ListaProdutoComponent } from './components/lista-produto/lista-produto.component';
import { AcaoComponent } from './pages/categorias/acao/acao.component';
import { RpgComponent } from './pages/categorias/rpg/rpg.component';
import { AventuraComponent } from './pages/categorias/aventura/aventura.component';
import { SimulacaoComponent } from './pages/categorias/simulacao/simulacao.component';
import { EsportesComponent } from './pages/categorias/esportes/esportes.component';
import { EstrategiaComponent } from './pages/categorias/estrategia/estrategia.component';
import { CorridaComponent } from './pages/categorias/corrida/corrida.component';
import { CarrinhoListaComponent } from './carrinho-lista/carrinho-lista.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CadastroUsuarioComponent,
    CadastroProdutoComponent,
    MainNavComponent,
    ListaProdutoComponent,
    AcaoComponent,
    RpgComponent,
    AventuraComponent,
    SimulacaoComponent,
    EsportesComponent,
    EstrategiaComponent,
    CorridaComponent,
    CarrinhoListaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
