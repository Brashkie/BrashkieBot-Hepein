let handler = async (m, { conn }) => {
let vn = './media/audiobot/esta caliente.mp3';
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', {  
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),   
}), 'error.png', `*🥵 𝗘𝗦𝗧𝗔 𝗖𝗔𝗟𝗜𝗘𝗡𝗧𝗘!! 🥵*`, m)   
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { 
type: 'audioMessage', 
ptt: true });
};
handler.help = ['caliente']
handler.tags = ['maker']
handler.command = /^(caliente)$/i
export default handler
