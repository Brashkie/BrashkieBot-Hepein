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
    let menu = `@${toUser} esta bailando XD`
    const vi = ['https://telegra.ph/file/63c8cc3cc497e6835b188.mp4',
        'https://telegra.ph/file/9651fa12f8b272afaf364.mp4',
        'https://telegra.ph/file/e1d573470c7b848ad1c59.mp4',
        'https://telegra.ph/file/0436ce6db32656eccb2f3.mp4',
        'https://telegra.ph/file/e58467fd29080d65fc15d.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['dance2']
handler.tags = ['anime']
export default handler
