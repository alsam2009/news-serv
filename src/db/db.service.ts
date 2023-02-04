import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises'
import { resolve } from 'path'
import {TypeData} from "../data/type.data";

@Injectable()
export class DbService {
  async getAllData(): Promise<TypeData[]> {
    const pathFile = resolve(process.cwd(), 'src', 'data', 'data.json')
    return (JSON.parse(await readFile(pathFile, 'utf-8')) as { data: TypeData[] }).data
  }

  async findNews(search: string) {
    const datas = await this.getAllData()
    return datas.filter(el => el.title.includes(search))
  }

  async getById(id: string) {
    const data = await this.getAllData()
    console.log(Array.isArray(data) )
    return data.find(el => `${el.id}` === id) || null
  }
}
