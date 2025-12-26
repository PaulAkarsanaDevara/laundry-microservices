"use strict";
// export class HttpException extends Error {
//   constructor(
//     public status: number,
//     public message: string
//   ) {
//     super(message);
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
class HttpException extends Error {
    status;
    constructor(status, message) {
        super(message);
        this.status = status;
        Object.setPrototypeOf(this, HttpException.prototype);
    }
}
exports.HttpException = HttpException;
