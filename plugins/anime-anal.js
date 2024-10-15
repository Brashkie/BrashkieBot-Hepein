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
    let menu = `@${toUser} se la metio en el ano a *@${who.split('@')[0]}*`

    if (!db.data.chats[m.chat].modohorny && m.isGroup) {
        return conn.reply(m.chat, '🔞 *¡Estos comandos están desactivados!*', m);
      }

    const vi = ['https://i.imgur.com/S5O01ty.mp4',
        'https://i.imgur.com/IWwr7qR.mp4',
        'https://i.imgur.com/BhIioTh.mp4',
        'https://i.imgur.com/ckYyfXQ.mp4',
        'https://i.imgur.com/Vag8yW7.mp4',
        'https://i.imgur.com/2t3vWPG.mp4',
        'https://i.imgur.com/kN0VknD.mp4',
        'https://i.imgur.com/S4eWPoP.mp4',
        'https://i.imgur.com/8ZwfRBp.mp4',
        'https://i.imgur.com/8GnnpuL.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['anal1']
handler.tags = ['anime']
export default handler
