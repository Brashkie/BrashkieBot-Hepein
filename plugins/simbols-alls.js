/*Fue creado por BrashkieBot*/

import fs from 'fs'  
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import util from 'util'
import path from 'path' 

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, participants, groupMetadata, text, command }) => {
    if (command='simbcommon'){
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let toUser = `${m.sender.split("@")[0]}`
    let menu = '    █▓▒░ 𝗦𝗜𝗠𝗕𝗢𝗟𝗢𝗦 𝗖𝗢𝗠𝗨𝗡𝗘𝗦 ░▒▓█\n\n𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴀᴊᴇᴅʀᴇᴢ\n   `♔` `♕` `♖` `♗` `♘` `♙` `♚` `♛` `♜` `♝` `♞` `♟`\n𒅒ᴍᴜꜱɪᴄ ɴᴏᴛᴇ ꜱɪᴍʙᴏʟᴏꜱ\n`♩` `♪` `♫` `♬` `♭` `♮` `♯` `𝄞` `𝄡` `𝄢` `𝄪` `𝄫` `🎵` `🎶` `🎼` `𓏢`\n𒅒'
    const imageUrls = ['https://telegra.ph/file/04b034b5364357adcfc60.png']
    
    await conn.sendMessage(m.chat, { image: { url: imageUrls }, caption: menu, mentions: [m.sender, who] })
}
}

handler.command = handler.help = ['simbcommon']
handler.tags = ['simbols']
export default handler
