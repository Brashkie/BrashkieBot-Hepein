/*Fue creado por Brashkie Bot*/

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
    let menu = `@${toUser} le esta alimentando a *@${who.split('@')[0]}*`
    const vi = ['https://telegra.ph/file/7a085953acde6ed9055bd.mp4',
        'https://telegra.ph/file/ad4657616755e4c02a51d.mp4',
        'https://telegra.ph/file/2cf70f5c7dc0235cbd98e.mp4',
        'https://telegra.ph/file/77e98a08aeace90d79185.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['feed1']
handler.tags = ['anime']
export default handler
