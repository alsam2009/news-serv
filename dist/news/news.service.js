"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
let NewsService = class NewsService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async getById(id) {
        const news = await this.dbService.getById(id);
        if (!news)
            throw new common_1.NotFoundException('News with id not found');
        return news;
    }
    async findNews(search) {
        const data = await this.dbService.findNews(search);
        if (data.length)
            return data;
    }
    async sortNews(data, sort, limit) {
        switch (sort) {
            case 'asc': {
                const sortData = data.sort((a, b) => a.publication_date > b.publication_date ? 1 : -1);
                return limit ? sortData.splice(0, limit) : sortData;
            }
            case 'desc': {
                const sortData = data.sort((a, b) => a.publication_date > b.publication_date ? -1 : 1);
                return limit ? sortData.splice(0, limit) : sortData;
            }
            default: {
                return limit ? data.splice(0, limit) : data;
            }
        }
    }
    async getNews(search, sort, limit) {
        if (search) {
            const data = await this.findNews(search);
            return this.sortNews(data, sort, limit);
        }
        else {
            const data = await this.dbService.getAllData();
            return this.sortNews(data, sort, limit);
        }
    }
};
NewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map