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
    let menu = `@${toUser} le abrazó a *@${who.split('@')[0]}*`
    const vi = ['https://telegra.ph/file/b6814c2bd8fead1051cee.mp4',
        'https://telegra.ph/file/bbc8ac2b7c0827769d5c7.mp4',
        'https://telegra.ph/file/c9f2c65d2ba87d6f87962.mp4',
        'https://telegra.ph/file/a4f579ce162b62106f933.mp4',
        'https://telegra.ph/file/7db4a7604a2a5b8ce1019.mp4',
        'https://telegra.ph/file/d111a3b3d9accc6073202.mp4',
        'https://telegra.ph/file/ece314cdf9e7bad5f9863.mp4',
        'https://telegra.ph/file/47c80d1ef67c176f400d6.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['hug1']
handler.tags = ['anime']
export default handler
