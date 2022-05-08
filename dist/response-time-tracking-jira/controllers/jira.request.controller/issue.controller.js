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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const logDetail_entity_1 = require("../../models/logDetail.entity");
const issue_service_1 = require("../../services/jira-request-services/issue.service");
let IssueController = class IssueController {
    constructor(issueService, logRepo) {
        this.issueService = issueService;
        this.logRepo = logRepo;
    }
    async getIssueResponse() {
        const result = this.issueService.get('search');
        console.log('In Controller:::');
        return (await result).data;
    }
    async getPostResponse() {
        const result = await this.issueService.post('search', { "fields": ["*all"], "expand": ["changelog"], });
        console.log('In Controller:::');
        return result.data;
    }
    async getUpdatedResponse() {
        const finalDateVal = "";
        await this.logRepo.findOne({
            order: { updated_at: 'DESC' }
        }).then(async (queryResult) => {
            if (queryResult != undefined) {
                var lastUpdatedDate = queryResult.updated_at;
                const finalDate = lastUpdatedDate.toISOString().split('T')[0];
                const result = this.issueService.updateResponse('search', { "fields": ["*all"], "expand": ["changelog"], "jql": "updated > " + `${finalDate}` });
                return (await result).data;
            }
            else {
                const result = this.issueService.updateResponse('search', { "fields": ["*all"], "expand": ["changelog"], "jql": "updated > 2022-05-04" });
                return (await result).data;
            }
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "getIssueResponse", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "getPostResponse", null);
__decorate([
    (0, common_1.Get)('updatedData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "getUpdatedResponse", null);
IssueController = __decorate([
    (0, common_1.Controller)('issues'),
    __param(1, (0, typeorm_1.InjectRepository)(logDetail_entity_1.LogDetail)),
    __metadata("design:paramtypes", [issue_service_1.IssueService, Object])
], IssueController);
exports.IssueController = IssueController;
//# sourceMappingURL=issue.controller.js.map