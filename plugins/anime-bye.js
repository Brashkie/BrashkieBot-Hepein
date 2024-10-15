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
    let menu = `@${toUser} se esta despidiendo de *@${who.split('@')[0]}*`
    const vi = ['https://i.imgur.com/39AoSKo.mp4',
        'https://i.imgur.com/u6Crxuf.mp4',
        'https://i.imgur.com/otLNyuP.mp4',
        'https://i.imgur.com/bOE4Orz.mp4',
        'https://i.imgur.com/03qMT5u.mp4',
        'https://i.imgur.com/ijpM5pS.mp4',
        'https://i.imgur.com/SsuBXWd.mp4',
        'https://i.imgur.com/uV5n62o.mp4',
        'https://i.imgur.com/iRUgkRF.mp4',
        'https://i.imgur.com/opvzchF.mp4',
        'https://i.imgur.com/3RjL9Pb.mp4',
        'https://i.imgur.com/MvlJaQ6.mp4',
        'https://i.imgur.com/eLRFYCx.mp4',
        'https://i.imgur.com/G1OfvoE.mp4',
        'https://i.imgur.com/6mepX0f.mp4',
        'https://i.imgur.com/oWWbrV4.mp4',
        'https://i.imgur.com/OSZrwOF.mp4',
        'https://i.imgur.com/zgyPPrg.mp4',
        'https://i.imgur.com/AzZgyhD.mp4',
        'https://i.imgur.com/kGtERbX.mp4',
        'https://i.imgur.com/QxhEige.mp4',
        'https://i.imgur.com/DZjIuHf.mp4',
        'https://i.imgur.com/XMdJt21.mp4',
        'https://i.imgur.com/KWvmuVu.mp4',
        'https://i.imgur.com/ZLldvys.mp4',
        'https://i.imgur.com/aMbsYYW.mp4',
        'https://i.imgur.com/kf4cgSC.mp4',
        'https://i.imgur.com/0TXl3UR.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['bye1']
handler.tags = ['anime']
export default handler
