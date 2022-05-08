"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraRequestModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jira_request_controller_controller_1 = require("./controllers/jira.request.controller/jira.request.controller.controller");
const jira_request_services_service_1 = require("./services/jira-request-services/jira-request-services.service");
const user_entity_1 = require("./models/user.entity");
const user_service_1 = require("./services/jira-request-services/user.service");
const users_controller_1 = require("./controllers/jira.request.controller/users.controller");
const blogs_service_1 = require("../blogs/blogs.service");
const issue_service_1 = require("./services/jira-request-services/issue.service");
const issue_controller_1 = require("./controllers/jira.request.controller/issue.controller");
const issue_entity_1 = require("./models/issue.entity");
const logDetailsService_service_1 = require("./services/jira-request-services/logDetailsService.service");
const logDetail_entity_1 = require("./models/logDetail.entity");
let JiraRequestModule = class JiraRequestModule {
};
JiraRequestModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule, typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, issue_entity_1.JiraIssue, logDetail_entity_1.LogDetail])],
        controllers: [jira_request_controller_controller_1.JiraRequestController, users_controller_1.UsersController, issue_controller_1.IssueController],
        providers: [jira_request_services_service_1.JiraRequestServices, user_service_1.UserService, blogs_service_1.BlogsService, issue_service_1.IssueService, logDetailsService_service_1.LogDetailsService]
    })
], JiraRequestModule);
exports.JiraRequestModule = JiraRequestModule;
//# sourceMappingURL=jira-request-module.module.js.map