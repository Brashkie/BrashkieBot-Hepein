let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let user = db.data.users[m.sender]
let str = `💖 𝙃𝙤𝙡𝙖!! 𝘼𝙜𝙧𝙖𝙙𝙚𝙯𝙘𝙤 𝙨𝙞 𝙢𝙚 𝘼𝙥𝙤𝙮𝙖𝙨 𝘿𝙤𝙣𝙖𝙣𝙙𝙤. 🎁 𝙈𝙚 𝙖𝙜𝙧𝙖𝙙𝙖 𝙚𝙡 𝙏𝙧𝙖𝙗𝙖𝙟𝙤 𝙦𝙪𝙚 𝙝𝙚 𝙇𝙤𝙜𝙧𝙖𝙙𝙤 𝘂𝗻 𝗽𝗼𝗰𝗼 𝙮 𝙡𝙤 c𝙤𝙢𝙥𝙖𝙧𝙩𝙤 𝙘𝙤𝙣 𝘂𝙨𝙩𝙚𝙙𝙚𝙨 𝗽𝗮𝗿𝗮 𝗾𝘂𝗲 𝘀𝗲 𝗱𝗶𝘃𝗶𝗲𝗿𝘁𝗮𝗻. 𝙂𝙧𝙖𝙘𝙞𝙖𝙨!
💖 𝙃𝙚𝙡𝙡𝙤!! 𝙄 𝙖𝙥𝙥𝙧𝙚𝙘𝙞𝙖𝙩𝙚 𝙞𝙛 𝙮𝙤𝙪 𝙨𝙪𝙥𝙥𝙤𝙧𝙩 𝙢𝙚 𝙗𝙮 𝙙𝙤𝙣𝙖𝙩𝙞𝙣𝙜. 🎁 𝗜 𝗹𝗶𝗸𝗲 𝘁𝗵𝗲 𝘄𝗼𝗿𝗸 𝗜 𝗵𝗮𝘃𝗲 𝗮𝗰𝗵𝗶𝗲𝘃𝗲𝗱 𝗮 𝗹𝗶𝘁𝘁𝗹𝗲 𝗮𝗻𝗱 𝗜 𝘀𝗵𝗮𝗿𝗲 𝗶𝘁 𝘄𝗶𝘁𝗵 𝘆𝗼𝘂 𝘀𝗼 𝘆𝗼𝘂 𝗰𝗮𝗻 𝗵𝗮𝘃𝗲 𝗳𝘂𝗻. 𝙏𝙝𝙖𝙣𝙠 𝙮𝙤𝙪!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙋𝙖𝙮𝙋𝙖𝙡 - 𝕭𝖗𝖆𝖘𝖍𝖐𝖎𝖊 𝕯𝖎𝖔𝖘
*https://paypal.me/KatashiF*
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
"title": `卐 𝕭𝖗𝖆𝖘𝖍𝖐𝖎𝖊 𝕯𝖎𝖔𝖘 卐\n${asistencia}`, 
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
