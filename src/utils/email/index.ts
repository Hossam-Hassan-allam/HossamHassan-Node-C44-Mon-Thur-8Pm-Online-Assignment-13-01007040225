import nodemailer from "nodemailer"
export default class sentEmail{
    async sentEmail({to,subject,text}:any){
        console.log("Email:", process.env.EMAIL_USER);
console.log("Password:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");
        const transporter=nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:465,
            secure:true,
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }
        })
       await transporter.sendMail({
            from: `sochail-app <${process.env.EMAIL_USER}>`,
            to:to,
            subject:subject,
            text:text
        })
    }
}
