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
    let menu = `@${toUser} esta llorando`
    const vi = ['https://telegra.ph/file/d3462edb881db80ea00a8.mp4',
        'https://telegra.ph/file/718c867e5f85b47e545e3.mp4',
        'https://telegra.ph/file/eedbdd7850d07606aeb9e.mp4',
        'https://telegra.ph/file/a5124199f3c705aaded4e.mp4',
        'https://telegra.ph/file/579111835c2ec4ff434e2.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['sad1']
handler.tags = ['anime']
export default handler
