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
    let menu = `@${toUser} le mordió a *@${who.split('@')[0]}*`
    const vi = ['https://telegra.ph/file/b60d9f51b18c56bdb1599.mp4',
        'https://telegra.ph/file/74e6decdbd7f7240edae0.mp4',
        'https://telegra.ph/file/c384c2f88c7aa800df9a4.mp4',
        'https://telegra.ph/file/14f5a0ce951bb1e2682fb.mp4',
        'https://telegra.ph/file/9c6e2d679a0d56f091098.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['bite1']
handler.tags = ['anime']
export default handler
