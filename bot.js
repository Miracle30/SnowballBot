console.log("hello im snowball beep meep");

require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();

const DIG = require("discord-image-generation");

//copy bot token
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord)

function readyDiscord() {
    
}


//tạo biến hằng các câu rep
const replies = [
    '✨ Break a leg! 🍀',
    '✨ Cố lên pạn ưi! 🍀',
    '✨ Blow them away! 🍀',
    '✨ Best of luck! 🍀',
    '✨ You will do great 🍀',
    '✨ Fingers crossed 🍀',
    '✨ Bonne chance 🍀',
    '✨ Je voulais juste dire bonne chance 🍀'
]

//bien
const robot ="🤖 "
const thuocla = "🚬 "
var tinnhan
var url 
var emoji ="✨ "

//event handler
client.on('message',  gotMessage)

function gotMessage(msg){
    console.log(msg.content);
    //check id của channel

    //channel các bro
    if (msg.channel.id=='561798348747833349'){
        // if(msg.content === 'chúc'){
        //     //msg.reply('vodichthienha')
        //     const index = Math.floor(Math.random()* replies.length);
        //     msg.channel.send(replies[index])
        // }
        // else if(msg.content === 'homie'){
        //     msg.channel.send('Hello')
        // }
        // else if(msg.content === 'vip'){
        //     msg.channel.send('Pro ')
        // }
        switch(msg.content){
            case 'chúc':
                const index = Math.floor(Math.random()* replies.length);
                tinnhan=replies[index]
                break;
            case 'homie':
                tinnhan='hello bro'
                break;
            case 'vip':
                tinnhan='pro'
                break;
            case 'đầu moi':
                tinnhan='vãi lồn luôn'
                break;
            default:
                return null
        }
        msg.channel.send(thuocla+tinnhan)
    }
    
    //channel của cua
    else if (msg.channel.id=='788803815499104266'){
        /*
        if(msg.content === 'dương' ){
            tinnhan="hello dương"
            msg.channel.send(robot+tinnhan)
        }
        else if(msg.content === 'xuân'){
            tinnhan="hello xuân"
            msg.channel.send(robot+tinnhan)
        }
        else if(msg.content.startsWith("snoppy")){
            tinnhan="Ảnh chó"
            url = "https://i.pinimg.com/736x/b7/e4/65/b7e4659b384dd32f856e834f9574e8b1.jpg"
            msg.channel.send(robot+tinnhan, {files: [url]} )
        }
        else if(msg.content.startsWith("ga")){
            tinnhan="ảnh gà"
            url = "./img/anh.jpg"
            msg.channel.send(robot+tinnhan, {files: [url]})
        }*/
        
        switch(msg.content){
            case 'chúc':
                const index = Math.floor(Math.random()* replies.length);
                tinnhan=replies[index]
                url = "./img/good_luck.jpg"
                emoji ="🍀"
                break;
            case 'noel':
                tinnhan="hello xuân"
                url = "https://image.freepik.com/free-vector/flat-design-christmas-wallpaper_23-2148334184.jpg"
                emoji ="❄️"
                break;
            case 'gà':
                tinnhan="hello gà"
                url = "./img/anh.jpg"
                emoji ="🐤"
                break;
            case 'chó':
                tinnhan="hello chó"
                url = "https://i.pinimg.com/736x/b7/e4/65/b7e4659b384dd32f856e834f9574e8b1.jpg"
                emoji ="🐶"
                break;
            case 'xuân':
            case 'Xuân':
                tinnhan="chúc mừng sinh nhật cua 🎂 🎁 🕯️ 🎈 🎉"
                url="https://image.winudf.com/v2/image/Y29tLkhhcHB5QmlydGhkYXkud2FsbHBhcGVyLmhvdHNob3Rfc2NyZWVuXzJfMTUyNjczMzEwN18wMzk/screen-2.jpg?fakeurl=1&type=.jpg"
                emoji="🎂 🎁 🕯️ 🎈 🎉 🦀 "
            default:
                return null;
        }
        msg.reply(emoji)
        msg.channel.send(robot+tinnhan, {files: [url]})
    }
    
}


