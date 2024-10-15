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
    let menu = `@${toUser} le dice ONIICHAN 👉👈 a *@${who.split('@')[0]}*`
    const vi = ['https://i.imgur.com/hUygrmq.mp4',
        'https://i.imgur.com/0DqiBfs.mp4',
        'https://i.imgur.com/heApHNK.mp4',
        'https://i.imgur.com/3sV1n2h.mp4',
        'https://i.imgur.com/9MQhm6B.mp4',
        'https://i.imgur.com/hAKOUrY.mp4',
        'https://i.imgur.com/ySRLWOx.mp4',
        'https://i.imgur.com/4QArLcm.mp4',
        'https://i.imgur.com/ti7YqHF.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['onichan1']
handler.tags = ['anime']
export default handler*/



//ACTUALIZADO

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
    //let toUser = `${m.sender.split("@")[0]}`
    let name2 = conn.getName(who)
    let name = conn.getName(m.sender)
    let menu = `*${name}* le dice ONIICHAN 👉👈 a *${name2}*`
    const vi = ['https://i.imgur.com/hUygrmq.mp4',
        'https://i.imgur.com/0DqiBfs.mp4',
        'https://i.imgur.com/heApHNK.mp4',
        'https://i.imgur.com/3sV1n2h.mp4',
        'https://i.imgur.com/9MQhm6B.mp4',
        'https://i.imgur.com/hAKOUrY.mp4',
        'https://i.imgur.com/ySRLWOx.mp4',
        'https://i.imgur.com/4QArLcm.mp4',
        'https://i.imgur.com/ti7YqHF.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['onichan1']
handler.tags = ['anime']
handler.group = true;
export default handler

