import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { MenuComponent } from './menu/menu.component';
import { AcaoComponent } from './pages/categorias/acao/acao.component';
import { AventuraComponent } from './pages/categorias/aventura/aventura.component';
import { CorridaComponent } from './pages/categorias/corrida/corrida.component';
import { EsportesComponent } from './pages/categorias/esportes/esportes.component';
import { EstrategiaComponent } from './pages/categorias/estrategia/estrategia.component';
import { RpgComponent } from './pages/categorias/rpg/rpg.component';
import { SimulacaoComponent } from './pages/categorias/simulacao/simulacao.component';

const routes: Routes = [{
  path: 'cadastro-usuario',
  component: CadastroUsuarioComponent
},{path: 'cadastro-produto',
component: CadastroProdutoComponent
},{path: 'menu',
component: MenuComponent
},
{path: 'acao',
component: AcaoComponent
},{path: 'aventura',
component: AventuraComponent
},{path: 'esportes',
component: EsportesComponent
},{path: 'estrategia',
component: EstrategiaComponent
},{path: 'rpg',
component: RpgComponent
},{path: 'simulacao',
component: SimulacaoComponent
},{path: 'corrida',
component: CorridaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
