import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cadastro } from 'src/app/models/cadastro.model';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  hide = true;

  cadastro: Cadastro = new Cadastro();

  //agrupamento de campos em um formulario
  form:FormGroup;
  nomeFormControl = this.fb.control('', {validators: [Validators.required], updateOn: "blur"});
  emailFormControl = this.fb.control('', {validators: [Validators.required, Validators.email], updateOn: "blur"});
  senhaFormControl = this.fb.control('', {validators: [Validators.required], updateOn: "blur"});
  cpfFormControl = this.fb.control('', {validators: [Validators.required], updateOn: "blur"});
  dataNascimentoFormControl = this.fb.control('', {validators: [Validators.required], updateOn: "blur"});
  




  constructor(private cadastroService: CadastroService, private fb: FormBuilder //Configuraçãoi de cada campo
    ) { 
      //pegando todos os campos de cima, e colocando no form
      this.form = this.fb.group({

        nomeFormControl : this.nomeFormControl,
        emailFormControl : this.emailFormControl,
        senhaFormControl : this.senhaFormControl,
        cpfFormControl : this.cpfFormControl,
        dataNascimentoFormControl : this.dataNascimentoFormControl,
        

      });

  }

  ngOnInit(): void {
  }

  salvar(){

    if(this.form.valid){
      this.cadastro.nome = this.nomeFormControl.value;
      this.cadastro.email = this.emailFormControl.value;
      this.cadastro.senha = this.senhaFormControl.value;
      this.cadastro.cpf = this.cpfFormControl.value;
      this.cadastro.dataNascimento = this.dataNascimentoFormControl.value;
      

    //JSON.Stringify é utilizado para montar uma representação no console do que seria enviado no banco de dados
    //JSON de qualquer objeto
    console.log(JSON.stringify(this.cadastro));
    //service.post e submetemos com o subscribe
    //o retorno do backend sera enviado para o subscribe
    this.cadastroService.post(this.cadastro).subscribe(
      //sucesso
      (cadastro)=>{
        this.cadastro = cadastro;

      }, 
      //falha
      (erro)=>{
        console.log(JSON.stringify(erro));

      });
    }

  }


}
