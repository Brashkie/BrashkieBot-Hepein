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
    let menu = `@${toUser} le folla muy rico a *@${who.split('@')[0]}*🥵`

    if (!db.data.chats[m.chat].modohorny && m.isGroup) {
        return conn.reply(m.chat, '🔞 *¡Estos comandos están desactivados!*', m);
      }


    const vi = ['https://i.imgur.com/lVLXOHR.mp4',
        'https://i.imgur.com/vFoIhKR.mp4',
        'https://i.imgur.com/lcphH2B.mp4',
        'https://i.imgur.com/yNYfHsF.mp4',
        'https://i.imgur.com/hvT4Faz.mp4',
        'https://i.imgur.com/lbUwQQm.mp4',
        'https://i.imgur.com/mXN1h08.mp4',
        'https://i.imgur.com/RkwjBFk.mp4',
        'https://i.imgur.com/dSUpfIV.mp4',
        'https://i.imgur.com/MdKllAu.mp4',
        'https://i.imgur.com/mpiFTmr.mp4',
        'https://i.imgur.com/u0SRfXs.mp4',
        'https://i.imgur.com/CW7xGY0.mp4',
        'https://i.imgur.com/JXaTmi7.mp4',
        'https://i.imgur.com/pXibpaB.mp4',
        'https://i.imgur.com/5RIvfCa.mp4',
        'https://i.imgur.com/iQbahUd.mp4',
        'https://i.imgur.com/D9ANB1S.mp4',
        'https://i.imgur.com/vQvVdgy.mp4',
        'https://i.imgur.com/9F2S8Gn.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['fuck1']
handler.tags = ['anime']
handler.grouo = true;
export default handler
