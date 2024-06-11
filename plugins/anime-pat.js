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
    let menu = `@${toUser} le acarició a *@${who.split('@')[0]}*`
    const vi = ['https://telegra.ph/file/bbdc5ee0c056a3d25e95d.mp4', 'https://telegra.ph/file/8cd4c0d5b75812d867c30.mp4','https://telegra.ph/file/e92fec68c657321740467.mp4','https://telegra.ph/file/6b53b030fe63ef59f9af2.mp4']
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['pat1']
handler.tags = ['anime']
export default handler
