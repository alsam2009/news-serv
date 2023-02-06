"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
const path_1 = require("path");
let DbService = class DbService {
    async getAllData() {
        const pathFile = (0, path_1.resolve)(process.cwd(), 'data.json');
        return JSON.parse(await (0, promises_1.readFile)(pathFile, 'utf-8')).data;
    }
    async findNews(search) {
        const datas = await this.getAllData();
        return datas.filter(el => el.title.includes(search));
    }
    async getById(id) {
        const data = await this.getAllData();
        console.log(Array.isArray(data));
        return data.find(el => `${el.id}` === id) || null;
    }
};
DbService = __decorate([
    (0, common_1.Injectable)()
], DbService);
exports.DbService = DbService;
//# sourceMappingURL=db.service.js.map