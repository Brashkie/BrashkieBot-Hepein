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
    let menu = `Hola @${toUser}
◢◤𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 𝗮𝗹 𝗺𝗲𝗻𝘂 𝗱𝗲 𝘀𝗶𝗺𝗯𝗼𝗹𝗼𝘀◢◤

════════════ ∘◦❁◦∘ ════════════
${usedPrefix}simbpopular
> Para ver los símbolos Populares

${usedPrefix}simbcommon
> Para ver los símbolos Comunes

${usedPrefix}simbtype
> Para ver los símbolos Tipograficos

${usedPrefix}simbpeople
> Para ver los símbolos De Personas

${usedPrefix}simbanimal
> Para ver los símbolos Animales

${usedPrefix}simbasterik
> Para ver los símbolos De Astericos

${usedPrefix}simbarrow
> Para ver los símbolos De Flecha

${usedPrefix}simbgrafic
> Para ver los símbolos Gráfico

${usedPrefix}simbmate
> Para ver los símbolos De Matemáticos

${usedPrefix}simblen
> Para ver los símbolos De Lenguaje

${usedPrefix}simbmoney
> Para ver los símbolos De Moneda

════════════ ∘◦❁◦∘ ════════════
    `
    const vi = ['https://telegra.ph/file/b06893bd99f508e13f9ba.mp4']
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

handler.command = handler.help = ['msimbols']
handler.tags = ['simbols']
export default handler

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
const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}
try {
let pp = 'https://telegra.ph/file/069abbabe8e23828e560f.jpg'
let list = global.motivation 
let contenido = list[Math.floor(Math.random() * list.length)]
let result = await translate(`${contenido}`, { to: lenguajeGB.lenguaje(), autoCorrect: true })
let texto = `◢◤𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 𝗮𝗹 𝗺𝗲𝗻𝘂 𝗱𝗲 𝘀𝗶𝗺𝗯𝗼𝗹𝗼𝘀◢◤

${usedPrefix}simbpopular
> Para ver los símbolos Populares
${usedPrefix}simbcommon
> Para ver los símbolos Comunes
${usedPrefix}simbtype
> Para ver los símbolos Tipograficos
${usedPrefix}simbpeople
> Para ver los símbolos De Personas
${usedPrefix}simbanimal
> Para ver los símbolos Animales
${usedPrefix}simbasterik
> Para ver los símbolos De Astericos
${usedPrefix}simbarrow
> Para ver los símbolos De Flecha
${usedPrefix}simbgrafic
> Para ver los símbolos Gráfico
${usedPrefix}simbmate
> Para ver los símbolos De Matemáticos
${usedPrefix}simblen
> Para ver los símbolos De Lenguaje
${usedPrefix}simbmoney
> Para ver los símbolos De Moneda
`.trim()
conn.sendMessage(m.chat, {image: pp, caption: texto,mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}  
}


handler.fail = null;
handler.command = /^spsymbols/i
export default handler*/
