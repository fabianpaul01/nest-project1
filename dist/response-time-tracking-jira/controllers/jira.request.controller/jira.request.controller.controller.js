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
exports.JiraRequestController = void 0;
const common_1 = require("@nestjs/common");
const jira_request_services_service_1 = require("../../services/jira-request-services/jira-request-services.service");
let JiraRequestController = class JiraRequestController {
    constructor(jiraService) {
        this.jiraService = jiraService;
    }
    async jiraIssuesResponse() {
        const result = this.jiraService.get('');
        console.log(result);
        return (await result).data;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JiraRequestController.prototype, "jiraIssuesResponse", null);
JiraRequestController = __decorate([
    (0, common_1.Controller)('jirarequestcontroller'),
    __metadata("design:paramtypes", [jira_request_services_service_1.JiraRequestServices])
], JiraRequestController);
exports.JiraRequestController = JiraRequestController;
//# sourceMappingURL=jira.request.controller.controller.js.map