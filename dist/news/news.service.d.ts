import { DbService } from "../db/db.service";
import { TypeData } from "../data/type.data";
export declare class NewsService {
    private readonly dbService;
    constructor(dbService: DbService);
    getById(id: string): Promise<TypeData>;
    findNews(search: string): Promise<TypeData[]>;
    sortNews(data: TypeData[], sort?: string, limit?: number): Promise<TypeData[]>;
    getNews(search: string, sort?: string, limit?: number): Promise<TypeData[]>;
}
