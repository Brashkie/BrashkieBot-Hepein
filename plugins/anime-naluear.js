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
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `@${toUser} le nalgueo a *@${who.split('@')[0]}*`

    if (!db.data.chats[m.chat].modohorny && m.isGroup) {
        return conn.reply(m.chat, '🔞 *¡Estos comandos están desactivados!*', m);
      }
    
    const vi = ['https://telegra.ph/file/d4b85856b2685b5013a8a.mp4',
        'https://i.imgur.com/aklfPmL.mp4',
        'https://i.imgur.com/t3TO6o0.mp4',
        'https://i.imgur.com/AVUqE1h.mp4',
        'https://i.imgur.com/aien7M7.mp4',
        'https://i.imgur.com/lLNOeVU.mp4',
        'https://i.imgur.com/ZyVixEC.mp4',
        'https://i.imgur.com/j7HtV5c.mp4',
        'https://i.imgur.com/d36GvBn.mp4',
        
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['spank1']
handler.tags = ['anime']
handler.group = true;
export default handler
