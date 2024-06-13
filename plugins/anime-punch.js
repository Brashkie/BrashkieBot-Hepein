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
    let menu = `@${toUser} le golpeó a *@${who.split('@')[0]}*`
    const vi = ['https://telegra.ph/file/f1100094036c69e70d3c6.mp4',
        'https://telegra.ph/file/e0da7b6041c89d1e22e4b.mp4',
        'https://telegra.ph/file/c98d50181c92473c26d6f.mp4',
        'https://telegra.ph/file/8ab51633d533045a2070c.mp4',
        'https://telegra.ph/file/fda9620dbe672cc1a293d.mp4',
        'https://telegra.ph/file/93f2eeaf6bc6d83446de0.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['punch1']
handler.tags = ['anime']
export default handler
