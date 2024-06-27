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
    if (command==='kiss2'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} le besó a *@${who.split('@')[0]}*`
        const vi = ['https://telegra.ph/file/46c3d9412515ea05da082.mp4',
            'https://telegra.ph/file/ad326b70ba3ef0af27244.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}
    
    if (command==='dance2'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} esta bailando XD`
        const vi = ['https://telegra.ph/file/e138d1566a48db444d578.mp4',
            'https://telegra.ph/file/de1fb5e2ac80b0d747fa0.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}
    
    if (command==='hug2'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} le abrazó a *@${who.split('@')[0]}*`
        const vi = ['https://telegra.ph/file/9a214718cf1891dd50ffc.mp4',
            'https://telegra.ph/file/4f8a7faa7c7f387ff9ea8.mp4',
            'https://telegra.ph/file/ac40a8982fcace6be06e8.mp4',
            'https://telegra.ph/file/5998699b42075c8e49106.mp4',
            'https://telegra.ph/file/6a7e24bff1f7c396b6373.mp4',
            'https://telegra.ph/file/21e4ed88f80832e49a690.mp4',
            'https://telegra.ph/file/4ec5df2c54cc31765af1f.mp4',
            'https://telegra.ph/file/1d69aa5da1f8b5c444f88.mp4',
            'https://telegra.ph/file/ce575e6fdce471c05dc17.mp4',
            'https://telegra.ph/file/d2ae416d3ae87b37a4f20.mp4',
            'https://telegra.ph/file/9c9baca4d46bf374517a6.mp4',
            'https://telegra.ph/file/741703a5b63357c91ef7a.mp4'
        ]
            
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true,caption: menu, mentions: [m.sender, who] })}
}

handler.command = handler.help = ['kiss2','dance2','hug2']
handler.tags = ['anime']
export default handler
