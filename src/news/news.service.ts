import {Injectable, NotFoundException} from '@nestjs/common';
import {DbService} from "../db/db.service";
import {TypeData} from "../data/type.data";

@Injectable()
export class NewsService {
  constructor(
    private readonly dbService: DbService
  ) {}

  async getById(id: string): Promise<TypeData> {
    const news = await this.dbService.getById(id)

    if (!news) throw new NotFoundException('News with id not found')

    return news
  }

  async findNews(search: string) {
    const data = await this.dbService.findNews(search)
    if (data.length) return data
  }

  async sortNews(data: TypeData[], sort?: string, limit?: number) {
    switch (sort) {
      case 'asc': {
        const sortData = data.sort((a, b) => a.publication_date > b.publication_date ? 1 : -1)
         return limit ? sortData.splice(0, limit) : sortData
      }
      case 'desc': {
        const sortData = data.sort((a, b) => a.publication_date > b.publication_date ? -1 : 1)
        return limit ? sortData.splice(0, limit) : sortData
      }
      default: {
        return limit ? data.splice(0, limit) : data
      }
    }
  }

  async getNews(search: string, sort?: string, limit?: number): Promise<TypeData[]> {

    if (search) {
      const data = await this.findNews(search)
      return this.sortNews(data, sort, limit)
    } else {
      const data = await this.dbService.getAllData()
      return this.sortNews(data, sort, limit)
    }
  }
}
