const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
function mailSending(){
    // import  {  createRequire  }  from  'nodemailer' ; 
    // const  nodemailer  =  createRequire ( import . meta . url ) ; 
    
    
   
    console.log("확인1")
    var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'snaking2695',
            pass: 'dlrnjscjf12'
        }
    });
    console.log("확인2")
    var mailOptions = {
        
        to: 'snaking2695@gmail.com',
        subject: '타입캡슐 오픈 시간이 되었습니다.',
        text: 'http://localhost:3000/capsuleopne#',
        
    
    };
    console.log("확인3")
    smtpTransport.sendMail(mailOptions, function(error, response){
        if (error){
            console.log(error);
        }
        else {
            console.log("Message sent : " + response.message);
        }   
            smtpTransport.close();
        });

}

module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('index.html');
    });

    app.get('/about',function(req,res){
        res.render('about.html');
    });

    app.get('/capsuleopne',function(req,res){
        res.render('capsuleopen.html');
    });

	app.get('/mailTry',function(req,res){
        mailSending();
        res.render('capsuleopen.html');
    });

    app.post('/mailPost',function(req,res){
        let id = req.body.capname;
        let password = req.body.password;
        res.render('capsuleopen.html');
    });

}