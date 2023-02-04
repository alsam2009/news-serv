import { Module } from '@nestjs/common';
import {DbModule} from "../db/db.module";
import {NewsService} from "./news.service";
import {NewsController} from "./news.controller";

@Module({
  imports: [DbModule],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
