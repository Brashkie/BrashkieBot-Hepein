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
    let menu = `@${toUser} le pateó con toda su fuerza a *@${who.split('@')[0]}*`
    const vi = ['https://i.imgur.com/ceQ5wVY.mp4',
        'https://i.imgur.com/mvhNAUK.mp4',
        'https://i.imgur.com/D5UdW9T.mp4',
        'https://i.imgur.com/PTkd5cN.mp4',
        'https://i.imgur.com/Wfh5mmc.mp4',
        'https://i.imgur.com/tq6XzTP.mp4',
        'https://i.imgur.com/wZL6ZZ2.mp4',
        'https://i.imgur.com/3fhkgXd.mp4',
        'https://i.imgur.com/kx1PF03.mp4',
        'https://i.imgur.com/hLPk8Fv.mp4',
        'https://i.imgur.com/BuTLzuT.mp4',
        'https://i.imgur.com/o9ImBEP.mp4',
        'https://i.imgur.com/6nBUnmA.mp4',
        'https://i.imgur.com/qB84qEY.mp4',
        'https://i.imgur.com/L3b7u3q.mp4',
        'https://i.imgur.com/Wakk5a3.mp4',
        'https://i.imgur.com/AeU24fN.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['kickbutt1']
handler.tags = ['anime']
handler.group = true;
export default handler
