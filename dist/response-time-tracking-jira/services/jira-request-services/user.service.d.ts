import { UpdateUserDto } from 'src/response-time-tracking-jira/dtos/update-user.dtos';
import { Repository } from 'typeorm';
import { User } from '../../models/user.entity';
import { CreateUserDto } from 'src/response-time-tracking-jira/dtos/create-user.dto';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    get(): Promise<User[]>;
    create(createUserDto?: CreateUserDto): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<void>;
    remove(id: number): Promise<void>;
    findOne(id: number): void;
    findAll(): Promise<void>;
}
