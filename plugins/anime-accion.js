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
    //try{}
    if (command==='bite1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} le mordió a *@${who.split('@')[0]}*`
        const vi = ['https://telegra.ph/file/b60d9f51b18c56bdb1599.mp4',
        'https://telegra.ph/file/74e6decdbd7f7240edae0.mp4',
        'https://telegra.ph/file/c384c2f88c7aa800df9a4.mp4',
        'https://telegra.ph/file/14f5a0ce951bb1e2682fb.mp4',
        'https://telegra.ph/file/9c6e2d679a0d56f091098.mp4'
    ]
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    if (commadn==='feed1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} le esta alimentando a *@${who.split('@')[0]}*`
        const vi = ['https://telegra.ph/file/7a085953acde6ed9055bd.mp4',
            'https://telegra.ph/file/ad4657616755e4c02a51d.mp4',
            'https://telegra.ph/file/2cf70f5c7dc0235cbd98e.mp4',
            'https://telegra.ph/file/77e98a08aeace90d79185.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    if (commadn==='hug1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} le abrazó a *@${who.split('@')[0]}*`
        const vi = ['https://telegra.ph/file/b6814c2bd8fead1051cee.mp4',
            'https://telegra.ph/file/bbc8ac2b7c0827769d5c7.mp4',
            'https://telegra.ph/file/c9f2c65d2ba87d6f87962.mp4',
            'https://telegra.ph/file/a4f579ce162b62106f933.mp4',
            'https://telegra.ph/file/7db4a7604a2a5b8ce1019.mp4',
            'https://telegra.ph/file/d111a3b3d9accc6073202.mp4',
            'https://telegra.ph/file/ece314cdf9e7bad5f9863.mp4',
            'https://telegra.ph/file/47c80d1ef67c176f400d6.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    if (command==='kill1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} le esta matando a *@${who.split('@')[0]}*`
        const vi = ['https://telegra.ph/file/526a85be4b4b8724c39d8.mp4',
            'https://telegra.ph/file/cae7a2816daea40136d01.mp4',
            'https://telegra.ph/file/b66c2f0ced094edf6c73c.mp4',
            'https://telegra.ph/file/7d6d03d019ef4496d27c5.mp4',
            'https://telegra.ph/file/15a2f9e19989a9989ef76.mp4',
            'https://telegra.ph/file/ebab3240bf05403757d72.mp4',
            'https://telegra.ph/file/7aa5ae37a4ef602a784ea.mp4',
            'https://telegra.ph/file/d78a66110b5841bbb8099.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    if (command==='kiss1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} le besó a *@${who.split('@')[0]}*`
        const vi = ['https://telegra.ph/file/63c8cc3cc497e6835b188.mp4',
            'https://telegra.ph/file/9651fa12f8b272afaf364.mp4',
            'https://telegra.ph/file/e1d573470c7b848ad1c59.mp4',
            'https://telegra.ph/file/0436ce6db32656eccb2f3.mp4',
            'https://telegra.ph/file/e58467fd29080d65fc15d.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    if (command==='pat1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} le acarició a *@${who.split('@')[0]}*`
        const vi = ['https://telegra.ph/file/bbdc5ee0c056a3d25e95d.mp4',
            'https://telegra.ph/file/8cd4c0d5b75812d867c30.mp4',
            'https://telegra.ph/file/e92fec68c657321740467.mp4',
            'https://telegra.ph/file/6b53b030fe63ef59f9af2.mp4',
            'https://telegra.ph/file/f4f09b3b424b0f31ba26e.mp4',
            'https://telegra.ph/file/8c78a93d0761ddbe721b8.mp4',
            'https://telegra.ph/file/149f178c1d476677360a5.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    if (command==='poke1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} le toca a *@${who.split('@')[0]}*`
        const vi = ['https://telegra.ph/file/dbc4db37ecd470b90aa40.mp4',
            'https://telegra.ph/file/0da2ae3311426c5317678.mp4',
            'https://telegra.ph/file/a3e386c4072c916613ee7.mp4',
            'https://telegra.ph/file/e5d559720b89f1c543626.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    if (command==='punch1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} le golpeó a *@${who.split('@')[0]}*`
        const vi = ['https://telegra.ph/file/f1100094036c69e70d3c6.mp4',
            'https://telegra.ph/file/e0da7b6041c89d1e22e4b.mp4',
            'https://telegra.ph/file/c98d50181c92473c26d6f.mp4',
            'https://telegra.ph/file/8ab51633d533045a2070c.mp4',
            'https://telegra.ph/file/fda9620dbe672cc1a293d.mp4',
            'https://telegra.ph/file/93f2eeaf6bc6d83446de0.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    if (command==='slap1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} le bofeteó a *@${who.split('@')[0]}*`
        const vi = ['https://telegra.ph/file/c31d280f53a6002620c5d.mp4',
            'https://telegra.ph/file/ca254155729831888befa.mp4',
            'https://telegra.ph/file/c91ad7b4ec3ffb0b606c6.mp4',
            'https://telegra.ph/file/7c3a6e61782b369f535ef.mp4',
            'https://telegra.ph/file/6cb16688b64e72452c5b8.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

}

handler.command = handler.help = ['bite1','feed1','hug1','kiss1','kill1','pat1','poke1','punch1','slap1']
handler.tags = ['anime']
export default handler*/
