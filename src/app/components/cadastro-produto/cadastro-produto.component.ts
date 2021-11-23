import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  form:FormGroup;

  nomeFormControl = this.fb.control('',{
    validators: [Validators.required], updateOn: "blur"});
  precoFormControl = this.fb.control('',{
    validators: [Validators.required], updateOn: "blur"});
  plataformaFormControl = this.fb.control('',{
    validators: [Validators.required], updateOn: "blur"});
  categoriaFormControl = this.fb.control('',{
    validators: [Validators.required], updateOn: "blur"});
  

  constructor(private produtoService: ProdutoService,
  private fb: FormBuilder 
  ){

    this.form = this.fb.group({
      nomeFormControl : this.nomeFormControl,
      precoFormControl : this.precoFormControl,
      plataformaFormControl : this.plataformaFormControl,
      categoriaFormControl : this.categoriaFormControl
    });

  }

  ngOnInit(): void {
  }

  salvar(){
    if(this.form.valid){
      this.produto.nome = this.nomeFormControl.value;
      this.produto.preco = this.precoFormControl.value;
      this.produto.plataforma = this.plataformaFormControl.value;
      this.produto.categoria = this.categoriaFormControl.value;

      console.log(JSON.stringify(this.produto));

      this.produtoService.post(this.produto).subscribe(
        (user)=>{
          this.produto = user;
        },(erro)=>{
          console.log(JSON.stringify(erro));
        });
    }
  }

}
