let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let user = db.data.users[m.sender]
let str = `𒂭 𝗛𝗼𝗹𝗮a!! 𝗔𝗴𝗿𝗮𝗱𝗲𝗰𝗲𝗿𝗶𝗮 𝘀𝗶 𝗺𝗲 𝗔𝗽𝗼𝘆𝗮𝘀 𝗗𝗼𝗻𝗮𝗻𝗱𝗼 𝗮 𝗺𝗶 𝗕𝗼𝘁.
𒂭 𝗛𝗲𝗹𝗹𝗼!! 𝗜 𝘄𝗼𝘂𝗹𝗱 𝗮𝗽𝗽𝗿𝗲𝗰𝗶𝗮𝘁𝗲 𝗶𝘁 𝗶𝗳 𝘆𝗼𝘂 𝘀𝘂𝗽𝗽𝗼𝗿𝘁 𝗺𝗲 𝗯𝘆 𝗱𝗼𝗻𝗮𝘁𝗶𝗻𝗴 𝘁𝗼 𝗺𝘆 𝗯𝗼𝘁.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙋𝙖𝙮𝙋𝙖𝙡 - 𝕭𝖗𝖆𝖘𝖍𝖐𝖎𝖊 𝕯𝖎𝖔𝖘
*https://paypal.me/BrashkieBot*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen1, 
"title": `𒅒𝔹ℝ𝔸𝕊ℍ𝕂𝕀𝔼 𝔻𝕀𝕆𝕊𒅒\n${asistencia}`, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": paypal, 
"sourceUrl": paypal, 
}
}
}, { quoted: fkontak })}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://paypal.me/OficialGD', '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
