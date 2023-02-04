import {Controller, Get, Param, Query} from '@nestjs/common';
import {NewsService} from "./news.service";

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async getNews(@Query() query: Record<string, string>) {
    const { search, sort, limit } = query
    return this.newsService.getNews(search, sort, +limit)
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.newsService.getById(id)
  }
}
