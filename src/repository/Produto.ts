import { BaseFirestoreRepository, getRepository } from "fireorm";
import { Produto } from "@/models/Produto";
import "@/config/firebase-admin"; 

class ProdutoRepository {
    private repository: BaseFirestoreRepository<Produto>;

    constructor() {
        this.repository = getRepository(Produto); 
    }

    async create(produto: Produto): Promise<Produto> {
        try {
            produto.criadoEm = new Date();
            return await this.repository.create(produto);
        } catch (error) {
            console.error("Erro ao criar produto:", error);
            throw error;
        }
    }

    async findAll(): Promise<Produto[]> {
        try {
            return await this.repository.find();
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            throw error;
        }
    }

    async findById(id: string): Promise<Produto | null> {
        try {
            return await this.repository.findById(id);
        } catch (error) {
            console.error("Erro ao buscar produto por ID:", error);
            throw error;
        }
    }

    async update(produto: Produto): Promise<Produto> {
        try {
            produto.atualizadoEm = new Date()
            return await this.repository.update(produto);
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.repository.delete(id);
        } catch (error) {
            console.error("Erro ao deletar produto:", error);
            throw error;
        }
    }
}

export default new ProdutoRepository();
