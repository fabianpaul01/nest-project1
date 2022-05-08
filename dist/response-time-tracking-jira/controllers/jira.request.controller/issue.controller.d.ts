import { IssueService } from "src/response-time-tracking-jira/services/jira-request-services/issue.service";
export declare class IssueController {
    private issueService;
    private logRepo;
    constructor(issueService: IssueService, logRepo: any);
    getIssueResponse(): Promise<any>;
    getPostResponse(): Promise<any>;
    getUpdatedResponse(): Promise<any>;
}
