/*Fue creado por BrashkieBot*/

/*import fs from 'fs'  
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
    let menu = `@${toUser} le saca la lengua a *@${who.split('@')[0]}*`
    const vi = ['https://i.imgur.com/tOd2ucd.mp4',
        'https://i.imgur.com/ws3zLxB.mp4',
        'https://i.imgur.com/xGPi9yk.mp4',
        'https://i.imgur.com/xhM04AP.mp4',
        'https://i.imgur.com/kyddYJx.mp4',
        'https://i.imgur.com/CPIick8.mp4',
        'https://i.imgur.com/UcBrMHl.mp4',
        'https://i.imgur.com/BvaiW9E.mp4',
        'https://i.imgur.com/oA5IYU2.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['kill1']
handler.tags = ['anime']
export default handler*/




//ACTUALIZADO

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
    //let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    //let toUser = `${m.sender.split("@")[0]}`
    //let menu = `@${toUser} le saca la lengua a *@${who.split('@')[0]}*`
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '🥷 *Etiqueta al usuario o menciona a alguien.* 👋\nEjemplo:\n> .tonque @Brashkie'
    let name2 = conn.getName(who)
    let name = conn.getName(m.sender)
    const vi = ['https://i.imgur.com/tOd2ucd.mp4',
        'https://i.imgur.com/ws3zLxB.mp4',
        'https://i.imgur.com/xGPi9yk.mp4',
        'https://i.imgur.com/xhM04AP.mp4',
        'https://i.imgur.com/kyddYJx.mp4',
        'https://i.imgur.com/CPIick8.mp4',
        'https://i.imgur.com/UcBrMHl.mp4',
        'https://i.imgur.com/BvaiW9E.mp4',
        'https://i.imgur.com/oA5IYU2.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: `*${name}*` + ' le saca la lengua a ' + `*${name2}*`, mentions: [m.sender, who] })
}

handler.command = handler.help = ['tonque1']
handler.tags = ['anime']
handler.group = true;
export default handler
