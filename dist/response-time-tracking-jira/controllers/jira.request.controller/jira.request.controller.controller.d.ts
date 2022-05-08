import { JiraRequestServices } from 'src/response-time-tracking-jira/services/jira-request-services/jira-request-services.service';
export declare class JiraRequestController {
    private jiraService;
    constructor(jiraService: JiraRequestServices);
    jiraIssuesResponse(): Promise<any>;
}
