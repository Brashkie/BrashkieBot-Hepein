//CÓDIGO CREADO GRACIAS A https://github.com/Azami19 & https://github.com/GataNina-Li
//Puedes editar el país,enlaces, los números se editan desde el config.js
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
try{
let contact, number, ofc, nombre, description, correo, lugar, enlace, biog
let pp = gataImg
const cat = `𒅒 𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲𝗕𝗼𝘁 𒅒
* ${bot}

*---------------------*

*CENTER BRASHKIEBOT*
*electronicatodo2006@gmail.com*

𝘽𝙍𝘼𝙎𝙃𝙆𝙄𝙀 𝙕𝙀𝙄𝙏𝙎𝙄 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼
*${asistencia}*

*---------------------*

ᵃ ᶜᵒⁿᵗᶦⁿᵘᵃᶜᶦᵒ́ⁿ ˢᵉ ᵉⁿᵛᶦᵃʳᵃⁿ ˡᵒˢ ᶜᵒⁿᵗᵃᶜᵗᵒˢ ᵈᵉ ᵐᶦ ᵖʳᵒᵖᶦᵉᵗᵃʳᶦᵒ / ᵈᵉˢᵃʳʳᵒˡˡᵃᵈᵒʳᵉˢ`
let biografiaBot = await conn.fetchStatus(conn.user.jid.split('@')[0] + '@s.whatsapp.net').catch(_ => 'undefined')
let bioBot = biografiaBot.status?.toString() || `${desc2 == '' ? lenguajeGB.smsContacto1() : desc2}`

let contacts = global.official.filter(c => c[2] === 1)
let lista = []
for (let i = 0; i < contacts.length; i++) {
contact = contacts[i]
number = String(contact[0])
ofc = await conn.getName(number + '@s.whatsapp.net') //String(contact[1])
let biografia = await conn.fetchStatus(number +'@s.whatsapp.net').catch(_ => 'undefined')
let bio = biografia.status?.toString() || `${desc2 == '' ? lenguajeGB.smsContacto2() : desc2}`

nombre = official[0][0] == String(contact[0]) ? official[0][1] : official[1][0] == String(contact[0]) ? official[1][1] : official[2][0] == String(contact[0]) ? official[2][1] : official[3][0] == String(contact[0]) ? official[3][1] : official[4][0] == String(contact[0]) ? official[4][1] : lenguajeGB.smsContacto3() 
description = official[0][0] == String(contact[0]) ? 'Solo temas de BrashkieBot' : official[1][0] == String(contact[0]) ? lenguajeGB.smsContacto4() : official[2][0] == String(contact[0]) ? lenguajeGB.smsContacto4() : official[3][0] == String(contact[0]) ? lenguajeGB.smsContacto4() : desc === '' ? lenguajeGB.smsContacto5() : desc
correo = official[0][0] == String(contact[0]) ? 'electronicatodo2006@gmail.com' : official[1][0] == String(contact[0]) ? 'soeasynt@gmail.com' : official[2][0] == String(contact[0]) ? lenguajeGB.smsContacto6() : mail === '' ? lenguajeGB.smsContacto6() : mail
lugar = official[0][0] == String(contact[0]) ? '🇵🇪 Perú' : official[1][0] == String(contact[0]) ? '🇲🇽 México' : official[2][0] == String(contact[0]) ? '🇻🇪 Venezuela' : official[3][0] == String(contact[0]) ? '🇲🇽 México' : country === '' ? '🇵🇪 Perú' : country
enlace = official[0][0] == String(contact[0]) ? 'https://github.com/Brashkie' : official[1][0] == String(contact[0]) ? 'https://chat.whatsapp.com/Dzl78SFcnbfCcj0XbbjLYl' : official[2][0] == String(contact[0]) ? 'https://whatsapp.com/channel/0029Va8t5DZ9cDDU8ntWVJ2n' : official[3][0] == String(contact[0]) ? 'https://chat.whatsapp.com/CnBH1Cdi1pG9jWjmAeUVGW' : md 
   
lista.push([number, ofc, nombre, description, official[3][0] == String(contact[0]) ? null : correo, lugar, enlace, bio, official[1][0] == String(contact[0]) ? 'https://www.youtube.com/@elrebelde.21' : null]) }  
lista.push([conn.user.jid.split('@')[0], await conn.getName(conn.user.jid), packname, lenguajeGB.smsContacto8(), mail === '' ? 'centergatabot@gmail.com' : mail, lenguajeGB.smsContacto7(), md, bioBot, yt, ig, fb, paypal, nna])
await conn.sendFile(m.chat, pp, 'lp.jpg', cat, fkontak, false, { contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𒅒 𝗠𝗲𝗴𝗮 𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲𝗕𝗼𝘁 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb.getRandom()}}})
await conn.sendContactArray(m.chat, lista, null, { quoted: fkontak })

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}} 
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador|contactos?|contacts?)$/i

export default handler

/*var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `
╭ ❖ ── ✦ ── ✦ ── ❖ ──╗
│
│ ✥𝓑𝓻𝓪𝓼𝓱𝓴𝓲𝓮 𝓓𝓲𝓸𝓼✥ 
│ *Wa.me/51918340705*
│
│ 𝑖𝑍𝑖
│ *wa.me/527442363122*
│
│ シ︎𝑾𝒊𝒍𝖘𝒐𝒏シ︎
│ *wa.me/5492964650915*
│
│*GRUPO OFICIAL DE BrashkieBot*
│*https://chat.whatsapp.com/CnBH1Cdi1pG9jWjmAeUVGW*
│
│𝓑𝓻𝓪𝓼𝓱𝓴𝓲𝓮 𝓓𝓲𝓸𝓼 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼
│*${asistencia}*
╰─ ❖ ── ✦ ── ✦ ── ❖ ──╝`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler*/
