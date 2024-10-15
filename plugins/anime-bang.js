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
    let menu = `*@${toUser}* le disparò a *@${who.split('@')[0]}*`
    const vi = ['https://i.imgur.com/ZXHM11v.mp4',
        'https://i.imgur.com/ppFSn7O.mp4',
        'https://i.imgur.com/yHLPehk.mp4',
        'https://i.imgur.com/LBt0IUf.mp4',
        'https://i.imgur.com/gta9t57.mp4',
        'https://i.imgur.com/IFp4akN.mp4',
        'https://i.imgur.com/jDKqqJJ.mp4',
        'https://i.imgur.com/uFMwPLv.mp4',
        'https://i.imgur.com/iyS7quL.mp4',
        'https://i.imgur.com/ybitMfQ.mp4',
        'https://i.imgur.com/1TEhu2i.mp4',
        'https://i.imgur.com/Fz1actM.mp4',
        'https://i.imgur.com/PAn6jLc.mp4',
        'https://i.imgur.com/GPllzy0.mp4',
        'https://i.imgur.com/JfLsMq0.mp4',
        'https://i.imgur.com/LuFpMrZ.mp4',
        'https://i.imgur.com/Kdtxw2E.mp4',
        'https://i.imgur.com/iIXVjrT.mp4',
        'https://i.imgur.com/8v4zu4l.mp4',
        'https://i.imgur.com/cVVrFp9.mp4',
        'https://i.imgur.com/JTMurj8.mp4',
        'https://i.imgur.com/BYHVhES.mp4',
        'https://i.imgur.com/pnCpVdY.mp4',
        'https://i.imgur.com/kkuagI6.mp4',
        'https://i.imgur.com/7jxFNok.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['bang1']
handler.tags = ['anime']
export default handler
