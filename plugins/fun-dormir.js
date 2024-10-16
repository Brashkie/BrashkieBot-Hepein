let handler = async (m, { conn }) => {
let vn = './media/audiobot/techo.mp3';
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', {  
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),   
}), 'error.png', `*🫦 𝗘𝗦𝗘 𝗠𝗜𝗘𝗠𝗕𝗥𝗢 𝗤𝗨𝗜𝗘𝗥𝗘 𝗗𝗢𝗥𝗠𝗜𝗥 𝗖𝗢𝗡 𝗘𝗟 𝗔𝗗𝗠𝗜𝗡 𝗕𝗔𝗝𝗢 𝗠𝗜𝗦𝗠𝗢 𝗧𝗘𝗖𝗛𝗢!! 🫦*`, m)   
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { 
type: 'audioMessage', 
ptt: true });
};
handler.help = ['techo']
handler.tags = ['maker']
handler.command = /^(techo)$/i
export default handler
