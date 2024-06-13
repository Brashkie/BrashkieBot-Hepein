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
    let menu = `@${toUser} le toca a *@${who.split('@')[0]}*`
    const vi = ['https://telegra.ph/file/dbc4db37ecd470b90aa40.mp4',
        'https://telegra.ph/file/0da2ae3311426c5317678.mp4',
        'https://telegra.ph/file/a3e386c4072c916613ee7.mp4',
        'https://telegra.ph/file/e5d559720b89f1c543626.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['poke1']
handler.tags = ['anime']
export default handler
