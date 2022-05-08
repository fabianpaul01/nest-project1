import { AxiosResponse } from 'axios';
export declare class JiraRequestServices {
    get(api: string, ...rest: any): Promise<AxiosResponse<any, any>>;
    post(api: string, bodyData: any, ...rest: any): Promise<AxiosResponse<any, any>>;
}
