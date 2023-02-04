import { Injectable } from '@nestjs/common';
import {DbService} from "./db/db.service";

@Injectable()
export class AppService {
  constructor(
    private readonly dbService: DbService
  ) {}
}
