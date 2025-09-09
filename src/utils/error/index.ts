export class Apperror extends Error{
    constructor(message:string,public status :number){
        super(message)
    }
}
 export class Authentication extends Apperror{
    constructor(message:string){
        super(message,401)
    }
}
export class Forbidden extends Apperror{
    constructor(message:string){
        super(message,403)
    }
}
export class notfound extends Apperror{
    constructor(message:string){
        super(message,404)
    }
}
export class conflict extends Apperror{
    constructor(message:string){
        super(message,409)
    }
}
export class serverError extends Apperror{
    constructor(message:string){
        super(message,500)
    }
}