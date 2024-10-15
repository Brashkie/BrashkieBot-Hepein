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
    let menu = `@${toUser} se esta burlando de *@${who.split('@')[0]}*`
    const vi = ['https://i.imgur.com/uMtBD8n.mp4',
        'https://i.imgur.com/fAnDFpP.mp4',
        'https://i.imgur.com/e4bQvNa.mp4',
        'https://i.imgur.com/cLwhOiK.mp4',
        'https://i.imgur.com/caklkVp.mp4',
        'https://i.imgur.com/xraSHtj.mp4',
        'https://i.imgur.com/ewQQW4g.mp4',
        'https://i.imgur.com/Y19QDXq.mp4',
        'https://i.imgur.com/IqV8Y44.mp4',
        'https://i.imgur.com/xw7sZSz.mp4',
        'https://i.imgur.com/7eWRVax.mp4',
        'https://i.imgur.com/Yg7jEtz.mp4',
        'https://i.imgur.com/rEsPvbB.mp4',
        'https://i.imgur.com/NA2g0oy.mp4',
        'https://i.imgur.com/jpVMTNw.mp4',
        'https://i.imgur.com/mDTPtnv.mp4',
        'https://i.imgur.com/WnMr18T.mp4',
        'https://i.imgur.com/hueCtvE.mp4',
        'https://i.imgur.com/PlHZI7G.mp4',
        'https://i.imgur.com/ZkmWDRk.mp4',
        'https://i.imgur.com/Ensq3Uu.mp4',
        'https://i.imgur.com/ZntoxHh.mp4',
        'https://i.imgur.com/81IyF1Y.mp4',
        'https://i.imgur.com/OX6iedN.mp4',
        'https://i.imgur.com/uc2qc2A.mp4',
        'https://i.imgur.com/dlTrDIH.mp4',
        'https://i.imgur.com/qhOkO9Q.mp4',
        'https://i.imgur.com/yzlFw0W.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['laugh1']
handler.tags = ['anime']
handler.group = true;
export default handler
