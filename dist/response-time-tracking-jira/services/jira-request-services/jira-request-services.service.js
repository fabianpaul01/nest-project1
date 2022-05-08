"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraRequestServices = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let JiraRequestServices = class JiraRequestServices {
    async get(api, ...rest) {
        const url = `${process.env.JIRA_HOST}/rest/api/3`;
        const result = await (0, axios_1.default)(`${url}/${api}`, {
            method: 'GET',
            headers: {
                Authorization: `Basic ${'am9kb2hleDc0NkB0b25hZXRvLmNvbTppNUhQVGpTT2NHSmlRNnF1dlgwSDAwRDY='}`,
                Accept: 'application/json',
            },
        });
        console.log('Received result : ' + result.data);
        return result;
    }
    async post(api, bodyData, ...rest) {
        const url = `${process.env.JIRA_HOST}/rest/api/3`;
        const result = await (0, axios_1.default)(`${url}/${api}`, {
            method: 'POST',
            data: bodyData,
            headers: {
                contentType: 'application/json',
                Authorization: `Basic ${'am9kb2hleDc0NkB0b25hZXRvLmNvbTppNUhQVGpTT2NHSmlRNnF1dlgwSDAwRDY='}`,
                Accept: 'application/json',
            },
        });
        return result;
    }
};
JiraRequestServices = __decorate([
    (0, common_1.Injectable)()
], JiraRequestServices);
exports.JiraRequestServices = JiraRequestServices;
//# sourceMappingURL=jira-request-services.service.js.map