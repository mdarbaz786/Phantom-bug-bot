//base by DGXeon x Phantom
//YouTube: @phantom-hacks01
//Instagram: phantom-hacks01
//Telegram: t.me/Hackerzone25
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@phantom-hacks01

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "917478172267"
global.ownername = "*Arbaz+Hacker"
global.ytname = "YT: phantom-hacks01"
global.socialm = ""
global.location = "India, Mizoram, Aizawl"

global.ownernumber = '917478172267'  //creator number
global.ownername = 'Arbaz+Hacker' //owner name
global.botname = 'xbug bot' //name of the bot

//sticker details
global.packname = 'Sticker By Phantom'
global.author = 'Hallo\n\nContact: 2348108395270'

//console view/theme
global.themeemoji = '😡'
global.wm = "Phantom"

//theme link
global.link = 'https://wa.me/+917478172267?text=*🌸⃝⃪꯭⃮⃕⃔⎯꯭᳝֟፝֟Arbaz-khan📌🧸͢-≛⃞*'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by 917478172267 user only',
    admin: 'This feature can be used by 917478172267 only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./modsMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
