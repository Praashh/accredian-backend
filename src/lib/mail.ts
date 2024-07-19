const nodemailer = require("nodemailer");
import dotenv from "dotenv"
dotenv.config();

const user: string = process.env.MAIL_USER!;

const app_password: string = process.env.MAIL_APP_PASSWORD!;

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smt.gamil.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: user,
        pass: app_password,
    },
});

export const sendEmail = async (to: string) => {
    console.log(to);
    const mailOptions = {
        from: {
            name: 'Accredian',
            address: user,
        },
        to: to, 
        subject: "Account Created Successfully 😊", 
        text: "Account Created Successfully", 
        html: `
           <html>
            <head>
                <style>
                    .container {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin: 20px;
                    }
                    .logo {
                        width: 200px;
                        margin-bottom: 20px;
                    }
                    .content {
                        font-size: 16px;
                        color: #333;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOmceZLdFYn-OP_fDgF8uLAL-OO5E9lMOlg&s" alt="Accredian Logo" class="logo"/>
                    <div class="content">
                        <h1>Account Creation Successful</h1>
                        <p>Dear User,</p>
                        <p>Congratulations! Your account has been successfully created.</p>
                        <p>We are thrilled to have you on board. You can now log in and start using our services.</p>
                        <p>If you have any questions or need assistance, please do not hesitate to contact our support team.</p>
                        <p>Best regards,</p>
                        <p>The Accredian Team</p>
                    </div>
                </div>
            </body>
        </html>
        `,
    }
    try {
        console.log("sending email....")
        await transporter.sendMail(mailOptions);
        return { sucess: true };
    } catch (error) {
        console.log(error);
        return { sucess: false };
    }
} 