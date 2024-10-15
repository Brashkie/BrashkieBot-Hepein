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
    let menu = `@${toUser} lamió a *@${who.split('@')[0]}*`
    const vi = ['https://i.imgur.com/tOABta7.mp4',
        'https://i.imgur.com/Dfne6Tn.mp4',
        'https://i.imgur.com/B6kQiYL.mp4',
        'https://i.imgur.com/LzHzRB2.mp4',
        'https://i.imgur.com/5vHft3l.mp4',
        'https://i.imgur.com/fC8qG42.mp4',
        'https://i.imgur.com/NobBSZb.mp4',
        'https://i.imgur.com/wMiw5gH.mp4',
        'https://i.imgur.com/YQ0fB9T.mp4',
        'https://i.imgur.com/GajHitx.mp4',
        'https://i.imgur.com/aRVwxZN.mp4',
        'https://i.imgur.com/hmeBpAa.mp4',
        'https://i.imgur.com/uGdsMFv.mp4',
        'https://i.imgur.com/pbEXGKQ.mp4',
        'https://i.imgur.com/3rtdKv8.mp4',
        'https://i.imgur.com/yVivArb.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['lick1']
handler.tags = ['anime']
handler.group = true;
export default handler
