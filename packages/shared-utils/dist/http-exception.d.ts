export declare class HttpException extends Error {
    status: number;
    constructor(status: number, message: string);
}
