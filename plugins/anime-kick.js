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
    let menu = `@${toUser} le dio una patada brutal a *@${who.split('@')[0]}*`
    const vi = ['https://i.imgur.com/0TXl3UR.mp4',
        'https://i.imgur.com/Q8vp3il.mp4',
        'https://i.imgur.com/dDAw7ln.mp4',
        'https://i.imgur.com/DzVx3lV.mp4',
        'https://i.imgur.com/YCFdODs.mp4',
        'https://i.imgur.com/FEyo9u8.mp4',
        'https://i.imgur.com/VwHGssf.mp4',
        'https://i.imgur.com/HwQugie.mp4',
        'https://i.imgur.com/ND3Z7dn.mp4',
        'https://i.imgur.com/4wjIi45.mp4',
        'https://i.imgur.com/8mDXTor.mp4',
        'https://i.imgur.com/WUiawKW.mp4',
        'https://i.imgur.com/S7amPHx.mp4',
        'https://i.imgur.com/iR8XQh3.mp4',
        'https://i.imgur.com/EEmrLNq.mp4',
        'https://i.imgur.com/mOYXqhJ.mp4',
        'https://i.imgur.com/zyNnVN2.mp4',
        'https://i.imgur.com/Iw3HaZF.mp4',
        'https://i.imgur.com/MWbUvtI.mp4',
        'https://i.imgur.com/E6QF9lr.mp4',
        'https://i.imgur.com/aw59i3h.mp4',
        'https://i.imgur.com/EalhBcp.mp4',
        'https://i.imgur.com/VcihtQJ.mp4',
        'https://i.imgur.com/zd50Xux.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['kick1']
handler.tags = ['anime']
handler.group = true;
export default handler
