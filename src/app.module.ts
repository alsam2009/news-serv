import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DbModule} from "./db/db.module";
import {NewsModule} from "./news/news.module";

@Module({
  imports: [DbModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
