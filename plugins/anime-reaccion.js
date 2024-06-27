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
    //try{}
    if (command==='bath1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} se está bañando uff 🥵😏`
        const vi = ['https://telegra.ph/file/6947c0d6a0c98841b4675.mp4',
            'https://telegra.ph/file/b92068b5ce5cd0650dec6.mp4',
            'https://telegra.ph/file/5e365300163cc6bc76eda.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}
    
    if (command==='angry1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} está enojad@ 😡`
        const vi = ['https://telegra.ph/file/776d05a7ae2d680d0143e.mp4',
            'https://telegra.ph/file/526072b6426b45883541d.mp4',
            'https://telegra.ph/file/9f8be3448785b7b1036a3.mp4',
            'https://telegra.ph/file/2e20a70c3e5b0e8dcdda0.mp4',
            'https://telegra.ph/file/7b5fad30426651ec7640c.mp4',
            'https://telegra.ph/file/8922a3616bff23a7989c7.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true,caption: menu, mentions: [m.sender, who] })}
    
    if (command==='greep1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} está saludando`
        const vi = ['https://telegra.ph/file/78a8bf17ef91c45c97188.mp4',
            'https://telegra.ph/file/f9d9982a80266e35aac4f.mp4',
            'https://telegra.ph/file/b3240a0de998c8d25b3c5.mp4',
            'https://telegra.ph/file/c2afee722622f2b6ce038.mp4',
            'https://telegra.ph/file/0725e6a9af7780742f6c8.mp4',
            'https://telegra.ph/file/cd3b9b0a7eb10f7d6a604.mp4',
            'https://telegra.ph/file/10c1a9cec3965c64b9d79.mp4',
            'https://telegra.ph/file/7733999a153335fac854b.mp4',
            'https://telegra.ph/file/b4ac51d63dd1d946ed4cf.mp4',
            'https://telegra.ph/file/b3fb29210ebb78f0f2990.mp4'
        ]
            
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true,caption: menu, mentions: [m.sender, who] })}
}

handler.command = handler.help = ['bath1','angry1','greep1']
handler.tags = ['anime']
export default handler
