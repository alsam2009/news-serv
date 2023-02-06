import { NewsService } from "./news.service";
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    getNews(query: Record<string, string>): Promise<import("../data/type.data").TypeData[]>;
    getById(id: string): Promise<import("../data/type.data").TypeData>;
}
