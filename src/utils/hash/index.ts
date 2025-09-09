import bcrypt from "bcrypt";
export function hashPassword(password:string){
return bcrypt.hashSync(password,10)
}
export function comparePassword(password:string,hash:string){
    return bcrypt.compareSync(password,hash)
}
export function hashphoneNumber(phoneNumber:string){
    return bcrypt.hashSync(phoneNumber,10)
}
export function comparephoneNumber(phoneNumber:string,hash:string){
    return bcrypt.compareSync(phoneNumber,hash)
}

    
