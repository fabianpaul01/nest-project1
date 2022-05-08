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
exports.IssueService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const issue_entity_1 = require("../../models/issue.entity");
const logDetail_entity_1 = require("../../models/logDetail.entity");
const jira_request_services_service_1 = require("./jira-request-services.service");
let IssueService = class IssueService {
    constructor(issueRepository, logRepo, jiraRequestService) {
        this.issueRepository = issueRepository;
        this.logRepo = logRepo;
        this.jiraRequestService = jiraRequestService;
    }
    async get(api, ...rest) {
        const result = this.jiraRequestService.get(api, rest);
        return result;
    }
    async post(api, bodyData, ...rest) {
        var _a;
        const result = this.jiraRequestService.post(api, bodyData, rest);
        let arrayOfCustomObject = [];
        try {
            for (let issueItem of (await result).data.issues) {
                let x = {
                    'issueKey': issueItem.key,
                    'summary': issueItem.fields.summary,
                    'changelog': []
                };
                (_a = issueItem.changelog) === null || _a === void 0 ? void 0 : _a.histories.forEach((history) => {
                    x.changelog.push(history.items);
                });
                x.changelog = x.changelog.flat();
                arrayOfCustomObject.push(x);
            }
            console.log("Hello Its there");
            console.log(arrayOfCustomObject[0]);
            this.issueRepository.save(arrayOfCustomObject);
            return result;
        }
        catch (err) {
            console.log(err);
        }
    }
    async updateResponse(api, bodyData, ...rest) {
        var _a;
        const result = this.jiraRequestService.post(api, bodyData, rest);
        let arrayOfCustomObject = [];
        let arrayOfCustomObjectforIssueTable = [];
        try {
            for (let issueItem of (await result).data.issues) {
                let x1 = {
                    'issueKey': issueItem.key,
                };
                arrayOfCustomObject.push(x1);
                let x2 = {
                    'issueKey': issueItem.key,
                    'summary': issueItem.fields.summary,
                    'changelog': []
                };
                (_a = issueItem.changelog) === null || _a === void 0 ? void 0 : _a.histories.forEach((history) => {
                    x2.changelog.push(history.items);
                });
                x2.changelog = x2.changelog.flat();
                arrayOfCustomObjectforIssueTable.push(x2);
            }
            console.log("Saved to Repositories Called:::::::");
            this.logRepo.save(arrayOfCustomObject);
            this.issueRepository.save(arrayOfCustomObjectforIssueTable);
            return result;
        }
        catch (err) {
            console.log(err);
        }
    }
};
IssueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(issue_entity_1.JiraIssue)),
    __param(1, (0, typeorm_1.InjectRepository)(logDetail_entity_1.LogDetail)),
    __metadata("design:paramtypes", [Object, Object, jira_request_services_service_1.JiraRequestServices])
], IssueService);
exports.IssueService = IssueService;
//# sourceMappingURL=issue.service.js.map