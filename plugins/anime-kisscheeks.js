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
    let menu = `@${toUser} le besó en la mejilla a *@${who.split('@')[0]}*`
    const vi = ['https://i.imgur.com/qi4wpAm.mp4',
        'https://i.imgur.com/dV9Q1E9.mp4',
        'https://i.imgur.com/F9XQp2Y.mp4',
        'https://i.imgur.com/bNgEHEe.mp4',
        'https://i.imgur.com/2eHbOcE.mp4',
        'https://i.imgur.com/KnlEz4X.mp4',
        'https://i.imgur.com/7GbsCY5.mp4',
        'https://i.imgur.com/OC2CZgm.mp4',
        'https://i.imgur.com/XvpQCA0.mp4',
        'https://i.imgur.com/SQFlQbI.mp4',
        'https://i.imgur.com/9WIzBRv.mp4',
        'https://i.imgur.com/17N54Iy.mp4',
        'https://i.imgur.com/5XjWm0T.mp4',
        'https://i.imgur.com/doh8hW8.mp4',
        'https://i.imgur.com/IsM6nZt.mp4',
        'https://i.imgur.com/oB3SyMD.mp4',
        'https://i.imgur.com/ztBhyFM.mp4',
        'https://i.imgur.com/GG5kJJ1.mp4',
        'https://i.imgur.com/fbhGfmy.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['kisscheeks1']
handler.tags = ['anime']
handler.group = true;
export default handler
