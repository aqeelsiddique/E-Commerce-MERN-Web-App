const nodemailer = require ('nodemailer');

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port:587,
//     secure:false,
//     requireTLS:true,
//     auth: {
//         user: "webdeveloperaqeel@gmail.com",
//         pass: "uxhcuiszeebphvvl"
//     }
// });
// const mailOptions = {
//     from: "webdeveloperaqeel@gmail.com",
//     to:"webdeveloperaqeel@gmail.com",
//     subject:"options.subject",
//     text:"options.message"

// };

//  transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("email has been sent", info.response)
//     }
//  });


///////////orihinal



const sendEmail = async  (options) => {

    
    const transporter = nodemailer.createTransport({


    host: "smtp.gmail.com",
    port:587,
    secure:false,
    requireTLS:true,
        auth: {
            user: "webdeveloperaqeel@gmail.com",
            pass: "uxhcuiszeebphvvl"
        }
    })

    // const transporter = nodemailer.createTransport({

    //     service:Process.env.SMPT_SERVICE,
    //     auth: {
    //         user: process.env.SMPT_MAIL,
    //         pass: process.env.SMPT_PASSWORD
    //     }
    // })
//     console.log('created');
// transporter.sendMail({
// from: 'aqeelsaddique83@gmail.com',
//   to: 'codechaser209@gmail.com',
//   subject: 'hello world!',
//   text: 'hello world!'
// });

    const mailOptions = {
        from: "webdeveloperaqeel@gmail.com",
        to:options.email,
        subject:options.subject,
        text:options.message,

    };

    await transporter.sendMail(mailOptions);
}

module.exports= sendEmail;
