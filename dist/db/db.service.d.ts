import { TypeData } from "../data/type.data";
export declare class DbService {
    getAllData(): Promise<TypeData[]>;
    findNews(search: string): Promise<TypeData[]>;
    getById(id: string): Promise<TypeData>;
}
