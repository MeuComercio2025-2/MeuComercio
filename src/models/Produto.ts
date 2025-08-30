import { Collection } from "fireorm";

@Collection("produtos")
export class Produto{
    id!: string;
    nome!: string;
    preco!: number;
    estoque!: number;
    criadoEm!: Date;
    atualizadoEm?: Date;
}