import { LogDetail } from "src/response-time-tracking-jira/models/logDetail.entity";
import { Repository } from "typeorm";
export declare class LogDetailsService {
    private issueRepository;
    constructor(issueRepository: Repository<LogDetail>);
}
