import { JiraRequestServices } from "./jira-request-services.service";
export declare class IssueService {
    private issueRepository;
    private logRepo;
    private jiraRequestService;
    constructor(issueRepository: any, logRepo: any, jiraRequestService: JiraRequestServices);
    get(api: string, ...rest: any): Promise<import("axios").AxiosResponse<any, any>>;
    post(api: string, bodyData: any, ...rest: any): Promise<import("axios").AxiosResponse<any, any>>;
    updateResponse(api: string, bodyData: any, ...rest: any): Promise<import("axios").AxiosResponse<any, any>>;
}
