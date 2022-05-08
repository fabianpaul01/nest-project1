import { BlogsService } from 'src/blogs/blogs.service';
import { UserService } from 'src/response-time-tracking-jira/services/jira-request-services/user.service';
import { CreateUserDto } from 'src/response-time-tracking-jira/dtos/create-user.dto';
import { UpdateUserDto } from 'src/response-time-tracking-jira/dtos/update-user.dtos';
export declare class UsersController {
    private blogservice;
    private usersService;
    constructor(blogservice: BlogsService, usersService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("../../models/user.entity").User>;
    findAll(): Promise<import("../../models/user.entity").User>;
    findOne(id: string): void;
    update(id: string, updateUserDto: UpdateUserDto): Promise<void>;
    remove(id: string): Promise<void>;
}
