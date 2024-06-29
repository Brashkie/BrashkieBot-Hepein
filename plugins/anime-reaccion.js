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

    if (command==='dance1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} está bailando`
        const vi = ['https://telegra.ph/file/af52d627212aa775600d4.mp4',
            'https://telegra.ph/file/88bb9d4ad66973b18a0dc.mp4',
            'https://telegra.ph/file/8ff335bca57d9a452ba31.mp4',
            'https://telegra.ph/file/b9959234795b7910d8ae2.mp4',
            'https://telegra.ph/file/35b5e53abe29b24c73bcb.mp4',
            'https://telegra.ph/file/32f071123a1490206ff68.mp4',
            'https://telegra.ph/file/0873f961a08424757c92c.mp4',
            'https://telegra.ph/file/2c10005b1fd30f04c7805.mp4',
            'https://telegra.ph/file/a556274a79e03ed64c8f1.mp4',
            'https://telegra.ph/file/fc592b86532def2c5ad5a.mp4',
            'https://telegra.ph/file/c52da69241c506e44611f.mp4',
            'https://telegra.ph/file/a7331ca535b5bf65bee62.mp4',
            'https://telegra.ph/file/8d350d90d05ab43dc37e8.mp4',
            'https://telegra.ph/file/6e1d41507887bc2de0b52.mp4',
            'https://telegra.ph/file/81b9c9a11524d1cae6ce6.mp4',
            'https://telegra.ph/file/e524b9ab2aafb14af13a5.mp4',
            'https://telegra.ph/file/d7b364515461bf810ca10.mp4',
            'https://telegra.ph/file/665be4c1549f45fd586af.mp4'
        ]
            
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true,caption: menu, mentions: [m.sender, who] })}

    if (command==='scared1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} está asustado 😧`
        const vi = ['https://telegra.ph/file/a5c132069537f01942cc0.mp4',
            'https://telegra.ph/file/9f38725a4096d4e4362b5.mp4',
            'https://telegra.ph/file/c3a61d4b84817e8c6148c.mp4',
            'https://telegra.ph/file/057421cdba6d4e812b6ce.mp4',
            'https://telegra.ph/file/6ac588c89b6f3a241ffb9.mp4',
            'https://telegra.ph/file/c9bfdc4f6d0e2b84b8a3c.mp4',
            'https://telegra.ph/file/8f067f045e87b2672cfb4.mp4',
            'https://telegra.ph/file/07283af2850808204db73.mp4',
            'https://telegra.ph/file/f6196d49dc9ba9b2c7086.mp4',
            'https://telegra.ph/file/62e666bbcca2e565c44f2.mp4',
            'https://telegra.ph/file/3e4da8e8854526e5d0452.mp4',
            'https://telegra.ph/file/2ad89796c7b98351c589c.mp4'
        ]
            
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true,caption: menu, mentions: [m.sender, who] })}

    if (command==='sleep1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} se fue a dormir`
        const vi = ['https://telegra.ph/file/27d6d9e548a8f6753870a.mp4',
            'https://telegra.ph/file/f5c25815aa41380eb7f7c.mp4',
            'https://telegra.ph/file/f8ebd8ddd155bb4e3332b.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    if (command==='code'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} està programando`
        const vi = ['https://telegra.ph/file/0f60b734d84525f913191.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}
}

handler.command = handler.help = ['bath1','angry1','greep1','scared1','dance1','sleep1','code']
handler.tags = ['anime']
export default handler
