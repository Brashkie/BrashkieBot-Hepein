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
    let menu = `@${toUser} le esta curando a *@${who.split('@')[0]}*`
    const vi = ['https://i.imgur.com/FcDmmEb.mp4',
        'https://i.imgur.com/IE6Umxj.mp4',
        'https://i.imgur.com/cbwTlvU.mp4',
        'https://i.imgur.com/ws2PlC0.mp4',
        'https://i.imgur.com/sO6U4Hg.mp4',
        'https://i.imgur.com/6HJzs96.mp4',
        'https://i.imgur.com/KRB9ET5.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['heal1']
handler.tags = ['anime']
export default handler
