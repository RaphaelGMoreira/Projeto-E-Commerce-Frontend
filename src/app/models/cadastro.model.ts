import { Endereco } from "./endereco.model";
//export === public
//class tipo do arquivo
//nome da classe
export class Cadastro{
    id !: number; //int, float, real, double e etc === number
    nome !: string;//! é por que o angular 11 reclama da variavel não ter inicialiazado
    email !: string;//com isso confirmo que quero assim mesmo, sem unicializar
    senha !: string;
    cpf !: number;
    dataNascimento!: Date;
    endereco !: Endereco;
    perfil !: string;

}