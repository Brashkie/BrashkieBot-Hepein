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
    let menu = `@${toUser} esta agarrando las tetas de *@${who.split('@')[0]}*`

    if (!db.data.chats[m.chat].modohorny && m.isGroup) {
        return conn.reply(m.chat, '🔞 *¡Estos comandos están desactivados!*', m);
      }
    
    const vi = ['https://i.imgur.com/dj6DfCo.mp4',
        'https://i.imgur.com/FCGbJ3w.mp4',
        'https://i.imgur.com/V0d0dik.mp4',
        'https://i.imgur.com/pycpyVb.mp4',
        'https://i.imgur.com/Zm2xIDn.mp4',
        'https://i.imgur.com/M4VWdle.mp4',
        'https://i.imgur.com/C3XSs2A.mp4',
        'https://i.imgur.com/PRpV5kv.mp4',
        'https://i.imgur.com/1TZCYNK.mp4',
        'https://i.imgur.com/9jeXEvI.mp4',
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['grabtits1']
handler.tags = ['anime']
export default handler*/


//*********************************************************************
//Podrias apoyar a BrashkieBot en github ->> https://github.com/Brashkie/BrashkieBot-Hepein
//VERSION ORIGINAL ACTUALIZADO
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
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    //let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let toUser = `${m.sender.split("@")[0]}`

    if (who === false) { // Verifica si 'who' es false
        conn.reply(m.chat, '(つ▀¯▀)つ━━━━━━━━━\n`𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗭𝗲𝗶𝘁𝘀𝗶` te ignora\n> Debes mencionar a alguien', m, canaloficial) // Responde con el mensaje de error
        return; // Sale de la función para que no se ejecute el resto del código
    }

    let menu = `@${toUser} esta agarrando las tetas de *@${who.split('@')[0]}*`

    if (!db.data.chats[m.chat].modohorny && m.isGroup) {
        return conn.reply(m.chat, '🔞 *¡Estos comandos están desactivados!*', m);
      }
    
    const vi = ['https://i.imgur.com/dj6DfCo.mp4',
        'https://i.imgur.com/FCGbJ3w.mp4',
        'https://i.imgur.com/V0d0dik.mp4',
        'https://i.imgur.com/pycpyVb.mp4',
        'https://i.imgur.com/Zm2xIDn.mp4',
        'https://i.imgur.com/M4VWdle.mp4',
        'https://i.imgur.com/C3XSs2A.mp4',
        'https://i.imgur.com/PRpV5kv.mp4',
        'https://i.imgur.com/1TZCYNK.mp4',
        'https://i.imgur.com/9jeXEvI.mp4',
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['grabtits1']
handler.tags = ['anime']
handler.group = true;
export default handler
