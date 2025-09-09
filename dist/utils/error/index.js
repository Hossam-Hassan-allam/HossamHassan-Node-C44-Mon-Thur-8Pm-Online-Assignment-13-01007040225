"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.conflict = exports.notfound = exports.Forbidden = exports.Authentication = exports.Apperror = void 0;
class Apperror extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
exports.Apperror = Apperror;
class Authentication extends Apperror {
    constructor(message) {
        super(message, 401);
    }
}
exports.Authentication = Authentication;
class Forbidden extends Apperror {
    constructor(message) {
        super(message, 403);
    }
}
exports.Forbidden = Forbidden;
class notfound extends Apperror {
    constructor(message) {
        super(message, 404);
    }
}
exports.notfound = notfound;
class conflict extends Apperror {
    constructor(message) {
        super(message, 409);
    }
}
exports.conflict = conflict;
class serverError extends Apperror {
    constructor(message) {
        super(message, 500);
    }
}
exports.serverError = serverError;
