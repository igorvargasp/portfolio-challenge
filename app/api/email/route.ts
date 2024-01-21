import nodeMailer from "nodemailer";
import { NextResponse} from "next/server"

interface EMailBody {
    name: string;
    email: string;
    message: string;
}



export async function POST(req:Request){
    const data = await req.json() as EMailBody ;
    try {
        const transporter = nodeMailer.createTransport({
            port: parseInt(process.env.SMTP_PORT || "587"),
            host: process.env.SMTP_HOST,
            auth: {
                user: process.env.SMTP_MAIL,
                pass: process.env.SMTP_PASSWORD,
            },
            secure: true
        })
        const {accepted } = await transporter.sendMail({
            from: process.env.SMTP_MAIL,
            to: data.email,
            subject: `${data.name} has send you the following message: ${data.message}`
        })

        if(accepted){
            return NextResponse.json({message: "Email has been sended!"}, {
                status: 200
            })
        }else {
            throw new Error("Error on sending email")
        }
    } catch (error) {
        throw new Error("Error on sending email")
    }
}