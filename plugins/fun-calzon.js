let handler = async (m, { conn }) => {
let vn = './media/audiobot/tieneloscan.mp3';
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', {  
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),   
}), 'error.png', `*😧 𝗘𝗦𝗘 𝗠𝗜𝗘𝗠𝗕𝗥𝗢 𝗧𝗜𝗘𝗡𝗘 𝗟𝗢𝗦 𝗖𝗔𝗟𝗭𝗢𝗡𝗘𝗦 𝗗𝗘𝗟 𝗔𝗗𝗠𝗜𝗡!! 😧*`, m)   
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { 
type: 'audioMessage', 
ptt: true });
};
handler.help = ['calzon']
handler.tags = ['maker']
handler.command = /^(calzon)$/i
export default handler
