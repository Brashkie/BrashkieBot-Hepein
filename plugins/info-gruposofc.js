let media = 'https://telegra.ph/file/578261f3a5c1820d753c0.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `💕 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝙊𝙎 𝙂𝙍𝙐𝙋𝙊𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎

💞 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝙂𝙍𝙊𝙐𝙋𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙏𝙚 𝙞𝙣𝙫𝙞𝙩𝙤 𝙖 𝙦𝙪𝙚 𝙩𝙚 𝙪𝙣𝙖𝙨 𝙖 𝙡𝙖 𝘾𝙤𝙢𝙪𝙣𝙞𝙙𝙖𝙙 ℍ𝕖𝕡𝕖𝕚𝕟𝔹𝕠𝕥. ✨ 𝙏𝙚𝙣 𝙪𝙣 𝙗𝙪𝙚𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 𝙚 𝙞𝙣𝙩𝙚𝙧𝙖𝙘𝙘𝙞𝙤𝙣𝙖 𝙘𝙤𝙣 𝙉𝙤𝙨𝙤𝙩𝙧𝙤𝙨. 👻
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𓃠 *Versión de ${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙍𝙐𝙋𝙊𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎 ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ *Informate de las Novedades!!!*
𝐶𝑎𝑛𝑎𝑙 𝑑𝑒 ℍ𝕖𝕡𝕖𝕚𝕟𝔹𝕠𝕥 🥷🏻 *${nna}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
♥𝗛𝗲𝗽𝗲𝗶𝗻𝗕𝗼𝘁♥ *${nna2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
☆«★†𝕮𝖔𝖓𝖊𝖝𝖎𝖔𝖓 𝖙𝖔𝖙𝖆𝖑 🚀§†»♡ *${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*🔥BrashkieBot🔥HEPEIN🔥 * *${nnn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*🔥WORLD🔥FREE FIRE🔥👻* *${nnnt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🔥FORTNITE🔥HEPEIN🔥 *${nnntt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🔥𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂🔥𝙷𝙴𝙿𝙴𝙸𝙽🔥 *${nnnttt}*\n

*Por favor, no ingresar con números de Bots, y mantener el respeto.*\n
*Please, do not enter with Bot numbers, and maintain respect.*`

const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4',
'https://telegra.ph/file/fb6797f20e3c14312a6ed.mp4',
'https://telegra.ph/file/f6379d1afb78a2b371e3e.mp4']
//await conn.sendFile(m.chat, vi.getRandom(), 'gata.mp4', str, fkontak)}
//const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4',
//'https://telegra.ph/file/fb6797f20e3c14312a6ed.mp4',
//'https://telegra.ph/file/f6379d1afb78a2b371e3e.mp4']
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: str, mentions: [m.sender, global.conn.user.jid] }, fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://github.com/GataNina-Li/GataBot-MD', 'HepeinBot', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|gruposkatashibot|gatabotgrupos|gruposkatashibot|groupofc|gruposkb|grupokb|groupkb$/i
handler.exp = 33

export default handler
