import { getRepository } from "fireorm";
import { Produto } from "@/models/Produto";
import "@/config/firebase-admin"; 

export default getRepository(Produto);