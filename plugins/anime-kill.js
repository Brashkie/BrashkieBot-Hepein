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
    let menu = `@${toUser} le esta matando a *@${who.split('@')[0]}*`
    const vi = ['https://telegra.ph/file/526a85be4b4b8724c39d8.mp4',
        'https://telegra.ph/file/cae7a2816daea40136d01.mp4',
        'https://telegra.ph/file/b66c2f0ced094edf6c73c.mp4',
        'https://telegra.ph/file/7d6d03d019ef4496d27c5.mp4',
        'https://telegra.ph/file/15a2f9e19989a9989ef76.mp4',
        'https://telegra.ph/file/ebab3240bf05403757d72.mp4',
        'https://telegra.ph/file/7aa5ae37a4ef602a784ea.mp4',
        'https://telegra.ph/file/d78a66110b5841bbb8099.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['kill1']
handler.tags = ['anime']
export default handler
