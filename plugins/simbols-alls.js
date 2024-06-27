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
    //try{}
    if (command==='simbcommon'){
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let toUser = `${m.sender.split("@")[0]}`
    let menu = '      █▓▒░ 𝗦𝗜𝗠𝗕𝗢𝗟𝗢𝗦 𝗖𝗢𝗠𝗨𝗡𝗘𝗦 ░▒▓█\n\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴀᴊᴇᴅʀᴇᴢ\n`♔` `♕` `♖` `♗` `♘` `♙` `♚` `♛` `♜` `♝` `♞` `♟`\n> 𒅒ᴍᴜꜱɪᴄ ɴᴏᴛᴇ ꜱɪᴍʙᴏʟᴏꜱ\n`♩` `♪` `♫` `♬` `♭` `♮` `♯` `𝄞` `𝄡` `𝄢` `𝄪` `𝄫` `🎵` `🎶` `🎼` `𓏢`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴛɪᴇᴍᴘᴏ\n`ϟ` `☀` `☁` `☂` `☃` `⛆` `⛇` `⛈︎` `☄` `☉` `☼` `☽` `☾` `♁` `♨` `❄` `❅` `❆` `༄` `࿓` `𐓷` `𐓏` `𖤓` `𖣔`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ɴᴇɢᴏᴄɪᴏꜱ\n`©` `®` `℗` `℠` `™` `℡` `℻` `℀` `℁` `℅` `℆`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴏʙᴊᴇᴛᴏꜱ\n`☏` `✁` `✂` `✃` `✄` `✆` `✇` `✈` `✉` `✎` `✏` `✐` `✑` `✒` `𓍝` `⚐` `⚑` `⚖` `⚗` `⚿` `⛟` `⛨` `⛫` `⛾` `⛿` `⎈` `࿄` `𖠦` `𖠿` `ꗃ` `𓄲` `𓊔` `𖤘` `𖣘` `߷` `𖠚` `𖠜` `𖡡` `𖥣` `𖥔` `𖥠` `⌖` `⊹` `𓊝` `𖠎` `𖡌` `𖣳` `𖤠` `𖥈` `𖥩` `𖧶` `ꚰ` `⛀` `⛁` `⛂` `⛃`\n\n 『••[𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲𝗕𝗼𝘁 : 𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗭𝗲𝗶𝘁𝘀𝗶𒅒]••』'
    const imageUrls = ['https://telegra.ph/file/04b034b5364357adcfc60.png']
    
    await conn.sendMessage(m.chat, { image: { url: imageUrls }, caption: menu, mentions: [m.sender, who] })}
    
    if (command==='simbpopular'){
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let toUser = `${m.sender.split("@")[0]}`
    let menu = '      █▓▒░ 𝗦𝗜𝗠𝗕𝗢𝗟𝗢𝗦 𝗣𝗢𝗣𝗨𝗟𝗔𝗥𝗘𝗦 ░▒▓█\n\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ALLS\n`ღ•⁂€™↑→↓⇝√∞░▲▶◀●☀☁☃☂☄★☆☉☐☑☚☛☜☝☞☟☠☢☣☪☮☯☸☹☺☻☼☽☾♔♕♖♗♘♚♛♜♝♟♨♡♩♪♫♬✈✉✎✓✔✘✚✞✟✡✠✦✧✩✪✮✯✹✿❀❁❂❄❅❆❝❞❣❤❥❦➤`\n\n 『••[𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲𝗕𝗼𝘁 : 𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗭𝗲𝗶𝘁𝘀𝗶𒅒]••』'
    const imageUrls = ['https://telegra.ph/file/04b034b5364357adcfc60.png']
    
    await conn.sendMessage(m.chat, { image: { url: imageUrls }, caption: menu, mentions: [m.sender, who] })}
}

handler.command = handler.help = ['simbcommon','simbpopular']
handler.tags = ['simbols']
export default handler
