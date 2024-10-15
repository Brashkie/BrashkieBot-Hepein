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
    let menu = `@${toUser} le pellizca sus mejillas a *@${who.split('@')[0]}*`
    const vi = ['https://i.imgur.com/c2vEl1V.mp4',
        'https://i.imgur.com/bfo5tOy.mp4',
        'https://i.imgur.com/gxfJhN1.mp4',
        'https://i.imgur.com/4FG4cmR.mp4',
        'https://i.imgur.com/HjyFkRZ.mp4',
        'https://i.imgur.com/jAJBzzJ.mp4',
        'https://i.imgur.com/VpYrsW9.mp4',
        'https://i.imgur.com/LgvpiXd.mp4',
        'https://i.imgur.com/uR1rh1k.mp4',
        'https://i.imgur.com/6Qzh6uV.mp4',
        'https://i.imgur.com/0SYKxwz.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['cheeks1']
handler.tags = ['anime']
export default handler
